# Usa una imagen base de Node.js
FROM node:16-alpine

# Establece el directorio de trabajo en la imagen
WORKDIR /usr/src/app

# Copia los archivos de tu aplicación al contenedor
COPY package*.json ./
COPY . .
COPY web/ ./web

# Instala las dependencias de tu aplicación
RUN npm install

# Expón el puerto en el que se ejecuta tu aplicación Node.js
EXPOSE 3000

# Comando para iniciar tu aplicación cuando se ejecute el contenedor
CMD ["npm", "start"]
