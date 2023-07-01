FROM node:18.16-alpine

WORKDIR /app

EXPOSE 3001

COPY package.json package-lock.json ./

RUN npm install

COPY . .

CMD ["npm", "run", "dev"]