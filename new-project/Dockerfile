FROM node
RUN apt update -y && apt install vim curl apt-transport-https -y
WORKDIR /app
COPY app.js ./
COPY ./ ./db_data 
COPY package* ./
RUN npm install
CMD [ "node", "/app/app.js" ]