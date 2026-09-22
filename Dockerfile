# ==========================================
# Construction Management System - Backend
# ==========================================

FROM eclipse-temurin:21-jdk

# Application directory inside container
WORKDIR /app

# Copy Maven wrapper and project files
COPY pom.xml .
COPY mvnw .
COPY .mvn .mvn

# Give Maven wrapper execute permission
RUN chmod +x mvnw

# Download dependencies first
RUN ./mvnw dependency:go-offline -DskipTests

# Copy source code
COPY src src

# Build Spring Boot application
RUN ./mvnw clean package -DskipTests

# Application uploads directory
RUN mkdir -p /app/uploads

# Spring Boot port
EXPOSE 8080

# Start application
ENTRYPOINT ["java", "-jar", "target/construction-management-system-0.0.1-SNAPSHOT.jar"]