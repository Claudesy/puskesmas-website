# ============================================================
# Dockerfile — Puskesmas Balowerti Premium Healthcare Platform
# Architecture & Built by Claudesy
# Author: dr. Ferdi Iskandar / Claudesy
# Date: 2026-03-03
# ============================================================
#
# Multi-stage build:
#   Stage 1 (builder): Install dependencies + build React/Vite SPA
#   Stage 2 (runtime): Serve static dist/ with lightweight nginx
#
# NOTE: Railway uses nixpacks natively (no Dockerfile needed).
# This Dockerfile is provided for local Docker development
# and as a reference for alternative deployments.
#
# Usage:
#   docker build -t puskesmas-balowerti .
#   docker run -p 8080:80 --env-file .env puskesmas-balowerti
# ============================================================

# ─── Stage 1: Build ──────────────────────────────────────────
FROM node:20-alpine AS builder

LABEL maintainer="Claudesy — Architecture & Built by Claudesy"
LABEL project="Puskesmas Balowerti Premium Healthcare Platform"
LABEL version="1.0.0"

# Set working directory
WORKDIR /app

# Install dependencies first (leverages Docker layer caching)
COPY package.json package-lock.json ./
RUN npm ci --prefer-offline

# Copy source code
COPY . .

# Set build-time environment variables (non-secret)
ARG VITE_APP_NAME="Puskesmas Balowerti"
ARG VITE_APP_VERSION="1.0.0"

ENV VITE_APP_NAME=$VITE_APP_NAME
ENV VITE_APP_VERSION=$VITE_APP_VERSION

# Build the production bundle
RUN npm run build

# Verify build output
RUN test -d /app/dist && echo "Build successful: dist/ exists" || (echo "Build FAILED: dist/ not found" && exit 1)

# ─── Stage 2: Serve ──────────────────────────────────────────
FROM nginx:1.27-alpine AS runtime

LABEL maintainer="Claudesy — Architecture & Built by Claudesy"

# Remove default nginx config
RUN rm /etc/nginx/conf.d/default.conf

# Copy custom nginx config for SPA routing
COPY --from=builder /app/docs/09_Code_Scaffold_and_Configuration_\[Architecture\ \&\ Built\ by\ Claudesy\]/nginx.conf /etc/nginx/conf.d/default.conf

# Copy built static files
COPY --from=builder /app/dist /usr/share/nginx/html

# Add security headers + gzip via nginx config
# (configured in nginx.conf)

# Expose port 80
EXPOSE 80

# Health check
HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 \
  CMD wget --quiet --tries=1 --spider http://localhost:80/ || exit 1

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
