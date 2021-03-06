FROM node:16
ENV REACT_APP_PRODUCTION_SERVER https://wattsinventory.herokuapp.com
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
COPY ./ ./
RUN npm i
CMD ["npm", "run", "start"]