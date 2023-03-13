FROM --platform=linux/x86_64 node:16-bullseye As development
WORKDIR /client
COPY package*.json ./
RUN npm install --force
COPY . .
EXPOSE 3000
CMD ["npm", "run", "dev"]
