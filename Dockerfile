# backend/Dockerfile

FROM node:18

# Crear carpeta de trabajo
WORKDIR /usr/src/app

# Copiar package.json y package-lock.json
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto del código
COPY . .

#Instalar ts-node-dev y typescript de forma global (opcional pero se recomienda)
RUN npm install -g ts-node-dev typescript

# Exponer el puerto
EXPOSE 3000

# Ejecutar el comando de desarrollo
CMD ["npm", "run", "dev"]