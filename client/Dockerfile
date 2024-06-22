FROM node:18-alpine as build
RUN apk update && apk add --no-cache build-base gcc autoconf automake zlib-dev libpng-dev nasm bash vips-dev git > /dev/null 2>&1
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /opt/
COPY package.json yarn.lock ./
RUN yarn global add node-gyp
RUN yarn add react-app-rewired
RUN yarn config set network-timeout 600000 -g && yarn install --production
ENV PATH /opt/node_modules/.bin:$PATH
WORKDIR /opt
COPY . .
RUN yarn build

# FROM node:18-alpine
# RUN apk add --no-cache vips-dev
# ENV NODE_ENV=production
# WORKDIR /opt/
# COPY --from=build /opt/node_modules ./node_modules
# WORKDIR /opt/app
# COPY --from=build /opt/app ./
# ENV PATH /opt/node_modules/.bin:$PATH

RUN chown -R node:node /opt
user node
EXPOSE 1337
CMD ["yarn", "start"]
