FROM node:14.18.1

WORKDIR /usr/src/app
COPY . .

RUN npm install --no-audit

ENV NODE_ENV production

RUN npm run build

RUN ls -a
