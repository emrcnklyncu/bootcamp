# Start with a base image containing Java runtime
FROM maven:3.6.0-jdk-8-alpine

# Add maintainer Info
LABEL maintainer="Emircan Kalyoncu <emircan.kalyoncu@linktera.com.tr>"
LABEL organization="Linktera Inc."
LABEL description="Demo API for Bootcamp"

# Create a user and a group
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

# Copy & Set work directory
COPY . /home/app/api
WORKDIR /home/app/api

# Change owner of app directory
RUN chown -R appuser:appgroup /home/app/api

# Support Arbitrary User IDs
RUN chgrp -R 0 /home/app/api && \
    chmod -R g+rwX /home/app/api

# Continue as 'appuser'
USER appuser

# Install packages
RUN mvn -f /home/app/api/pom.xml clean package -Dmaven.test.skip=true

# Run app
ENTRYPOINT ["java","-jar","/home/app/api/target/api.jar"]

# Make port 8080 available to the world outside this container
EXPOSE 8080:8080