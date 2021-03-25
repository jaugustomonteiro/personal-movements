FROM node

WORKDIR /usr/app

COPY package.json .

RUN npm install

COPY ormconfig.json .

COPY dist/. .

EXPOSE 3333

CMD ["npm", "start"]
