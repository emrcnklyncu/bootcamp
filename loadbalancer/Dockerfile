# Start with a base image containing Nginx runtime
FROM nginx:latest

# Delete default conf.
RUN rm /etc/nginx/conf.d/default.conf

# Copy new conf.
COPY nginx.conf /etc/nginx/conf.d