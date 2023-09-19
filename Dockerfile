# Specify the base image
FROM node:18

# Set the working directory
WORKDIR /usr/src/app

# Copy the app files
COPY package*.json ./
COPY . .

# Install dependencies
RUN npm install

# Specify the startup command
CMD ["npm", "run", "dev"]
