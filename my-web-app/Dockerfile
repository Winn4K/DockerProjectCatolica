# Use uma imagem base do Node.js
FROM node:14

# Defina o diretório de trabalho no container
WORKDIR /app

# Copie o package.json e instale as dependências
COPY package.json ./
RUN npm install

# Copie o restante do código
COPY . .

# Exponha a porta que a aplicação vai rodar
EXPOSE 3000

# Comando para rodar a aplicação
CMD ["npm", "start"]