# Dockerfile for a production React build using a multi-stage process

# STAGE 1: Build the React application
# Use Node.js version 22.4 as requested
FROM node:22.4-alpine AS builder

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock) first
# This leverages Docker's layer caching, so dependencies are only re-installed if these files change
COPY package*.json ./

# Install dependencies using 'npm ci' for a clean, consistent install from the lock file
RUN npm ci

# Copy the rest of the application source code
COPY . .

# Generate the production build of the React app
# The output will be in the /app/dist directory for Vite projects
RUN npm run build

# STAGE 2: Serve the application using Nginx
# Use a lightweight Nginx image
FROM nginx:1.25-alpine

# Copy the static build files from the 'builder' stage to the Nginx server directory
# Vite builds to the 'dist' directory by default
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy the custom Nginx configuration file
# This file ensures that client-side routing with React Router works correctly
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80 to allow traffic to the Nginx server
EXPOSE 80

# The Nginx image has a default command to start the server, so a CMD is not needed.
