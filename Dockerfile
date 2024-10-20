# Dockerfile

# Use Node.js as the base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./


# Copy the rest of the app files
COPY . .

RUN rm -rf data

# Install dependencies
RUN npm install

# Generate Prisma client
RUN npx prisma generate

# Expose port
EXPOSE 3000

CMD ["npm", "run", "dev"]
