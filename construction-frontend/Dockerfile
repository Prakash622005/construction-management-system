# ==========================================
# Stage 1: Build React Application
# ==========================================

FROM node:22-alpine AS build

WORKDIR /app

# Copy dependency files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy frontend source
COPY . .

# Build Vite application
RUN npm run build


# ==========================================
# Stage 2: Nginx
# ==========================================

FROM nginx:alpine

# Remove default nginx files
RUN rm -rf /usr/share/nginx/html/*

# Copy React production build
COPY --from=build /app/dist /usr/share/nginx/html

# Copy our nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Frontend port
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]