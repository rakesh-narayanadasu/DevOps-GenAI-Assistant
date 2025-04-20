# frontend/Dockerfile

# Build step
FROM node:18-alpine as builder
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .
RUN npm run build

# Runtime step
FROM node:18-alpine
WORKDIR /app

COPY --from=builder /app .

EXPOSE 3000
CMD ["npm", "start"]
