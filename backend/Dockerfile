FROM node:lts

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 4000

ENV ADDRESS=0.0.0.0
ENV PORT=4000

CMD ["node", "server.js"]
