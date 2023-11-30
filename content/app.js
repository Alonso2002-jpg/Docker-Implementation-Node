const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Configurar body-parser para analizar solicitudes con tipo de contenido application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
//Conexion a la BD
mongoose.connect('mongodb://admin:admin123@mongo-db:27017/despliegue?authSource=admin',{
});
//Schema de Mongo
const SchemaData = new mongoose.Schema({
  name: String,
});
//Datos
const Datos = mongoose.model("Datos", SchemaData);

//Uso de Express
app.use(express.static("web"));

const saveName = async (req, res) => {
  const { name } = req.body;
  console.log(name);
  res.status(200);
};

app.post("/saveName", async (req, res) => {
    try{
        const { name } = req.body;

        const newName = new Datos({name});

        await newName.save();

        res.redirect("/name?savedName=" + encodeURIComponent(newName.name));
    }catch(error){
        console.log(error)
        res.status(500).send("Error al guardar los datos")
        
    }
})


app.get("/", (req, res) => {
  res.sendFile("/web/index.html", { root: __dirname });
});

app.get("/name", (req, res) => {
    res.sendFile("/web/name.html", { root: __dirname})
})
app.listen(port, () => {
  console.log("Escuchando en puerto : " + port);
});
