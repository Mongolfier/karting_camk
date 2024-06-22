FROM node:20-alpine as build
RUN apk update && apk add --no-cache build-base gcc autoconf automake zlib-dev libpng-dev nasm bash vips-dev git > /dev/null 2>&1
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /opt/
COPY . .
RUN yarn add node-gyp pg
RUN yarn config set network-timeout 600000 -g && yarn
ENV PATH /opt/node_modules/.bin:$PATH
RUN yarn build

FROM node:20-alpine
RUN apk add --no-cache vips-dev
ENV NODE_ENV=production
WORKDIR /opt/
COPY --from=build /opt/node_modules ./node_modules
WORKDIR /opt/app
COPY --from=build /opt/app ./
RUN yarn add pg
ENV PATH /opt/node_modules/.bin:$PATH

EXPOSE 1337
CMD ["yarn", "start"]
