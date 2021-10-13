FROM node:14.17.3-alpine
WORKDIR /django_app/frontend
COPY package.json package-lock.json ./
RUN npm install 
COPY . ./
CMD ["npm", "start"]