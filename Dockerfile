# Multi-stage
# 1) Node image for building app
# 2) Clear app stage to serve requests

# Name the node stage "builder"
FROM node:14.17.3-alpine AS builder
# Set working directory
WORKDIR /app
# Copy all files from current directory to working dir in image
COPY . .
# install node modules and build assets
ARG REACT_APP_API_ORIGIN_URL=api/v1/
ARG REACT_APP_BACKEND_HOST=http://localhost:3001/
RUN npm run install:all
RUN npm run build:deploy

# nginx state for serving content
FROM node:14.17.3-alpine
# Set working directory
WORKDIR /app
# Copy all files from build directory to working dir in image
COPY --from=builder ./build .
# install node modules
RUN npm i

ENV PORT 8080
ENV HOST 0.0.0.0
EXPOSE 8080
CMD sh -c "cd /app && npm run start"
