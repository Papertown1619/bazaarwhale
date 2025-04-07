# CampusConnect Marketplace

CampusConnect is an online marketplace platform where users can buy and sell items in their campus community.

## Tech Stack

- **Backend**: Java with Spring Boot
- **Frontend**: HTML, CSS, JavaScript with Thymeleaf templating
- **Database**: MySQL
- **Build Tool**: Maven

## Features

- User registration and authentication
- Product listings with multiple images
- Search and filter products by category
- User dashboard to manage listings
- Messaging system between buyers and sellers
- Responsive design for mobile and desktop

## Setup Instructions

### Prerequisites

- Java 17 or higher
- MySQL 8.0
- Maven

### Database Setup

1. Create a MySQL database named `campusconnect`
2. Update the database credentials in `src/main/resources/application.properties` if needed

### Running the Application

```bash
# Clone the repository
git clone <repository-url>
cd campusconnect

# Build the project
mvn clean install

# Run the application
mvn spring-boot:run
```

The application will be available at `http://localhost:8080`

## Project Structure

- `src/main/java/com/campusconnect/marketplace` - Java source files
  - `config` - Configuration classes
  - `controller` - MVC controllers
  - `model` - Entity classes
  - `repository` - Spring Data JPA repositories
  - `service` - Business logic
- `src/main/resources` - Configuration and static resources
  - `static` - CSS, JavaScript, and images
  - `templates` - Thymeleaf templates
  - `application.properties` - Application configuration

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
