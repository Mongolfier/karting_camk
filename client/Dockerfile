FROM node:18-alpine as build
RUN apk update && apk add --no-cache build-base gcc autoconf automake zlib-dev libpng-dev nasm bash vips-dev git > /dev/null 2>&1
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

RUN mkdir /opt/app && chown node:node /opt/app

WORKDIR /opt/app
USER node

COPY --chown=node:node . /opt/app/
RUN yarn add react-app-rewired
RUN yarn config set network-timeout 600000 -g && yarn install --production
ENV PATH /opt/node_modules/.bin:$PATH
COPY --chown=node:node . .
RUN yarn build

EXPOSE 3000
CMD ["yarn", "start"]
