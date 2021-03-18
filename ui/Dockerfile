# Start with a base image containing Node runtime
FROM node:8-alpine

# Add maintainer Info
LABEL maintainer="Emircan Kalyoncu <emircan.kalyoncu@linktera.com.tr>"
LABEL organization="Linktera Inc."
LABEL description="Demo UI for Bootcamp"

# Create a user and a group
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

# Copy & Set work directory
COPY . /home/app/ui
WORKDIR /home/app/ui

# Change owner of app directory
RUN chown -R appuser:appgroup /home/app/ui

# Support Arbitrary User IDs
RUN chgrp -R 0 /home/app/ui && \
    chmod -R g+rwX /home/app/ui

# Continue as 'appuser'
USER appuser

# Install packages
RUN npm install

# Run app
ENTRYPOINT ["node", "app.js"]

# Make port 8082 available to the world outside this container
EXPOSE 8082:8082