FROM node:15.13-alpine
# set working directory
WORKDIR /web
# add `/app/node_modules/.bin` to $PATH
ENV PATH /web/node_modules/.bin:$PATH
# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent
RUN yarn add @material-ui/core
RUN yarn add @material-ui/icons

COPY . .
RUN npm run build
CMD ["npm", "start"]
