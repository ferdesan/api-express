# Use a imagem base oficial do Node.js
FROM node:14

# Crie e configure o diretório de trabalho
WORKDIR /api-express

# Copie o package.json e o package-lock.json
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie o restante do código da aplicação
COPY . .

# Exponha a porta da aplicação
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["npm", "start"]
