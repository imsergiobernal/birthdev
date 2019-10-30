FROM node:12-alpine

WORKDIR /usr/src/app

COPY . .

RUN npm run build

RUN cd www/ \
    && npm run build

EXPOSE 80

CMD [ "npm", "run",  ]