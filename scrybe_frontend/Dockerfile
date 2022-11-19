# pull the official base image
FROM node:current-alpine

# set work directory
WORKDIR /scrybe_frontend

# install dependencies
COPY package*.json ./
RUN npm install

# copy project
COPY . .

EXPOSE 3000
CMD ["npm", "run", "dev"]