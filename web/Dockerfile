FROM node:15.13-alpine
RUN mkdir /web
WORKDIR build --tag react .
RUN yarn add @material-ui/core
RUN yarn add @material-ui/icons
ENV PATH="./node_modules/.bin:$PATH"
COPY . .
RUN npm run build
CMD ["npm", "start"]