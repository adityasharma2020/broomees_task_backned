# Brommees Airline Task - Backend Implementation

I set up secure sign-up, sign-in, and authentication. I organized folders with MVC architecture integreated with repository layer and folders that make sense.

# Project Folder Structure

-   project-root/
    -   src/
        -   config/
            -   config.json
        -   routes/
            -   v1/
                -   index.js
        -   middlewares/
            -   auth-request-validator.js
            -   index.js
        -   migration/
            -   create-user-migration/
        -   modal/
            -   index.js
            -   user-modal/
        -   repository/
            -   user-repository/
        -   services/
            -   user-services/
        -   utils/
            -   helper-functions.js
            -   error-classes.js
        -   index.js
    -   package.json
    -   README.md
    -   .env

# Code Flow

-   **Index File:** Initializes the server, sets up configurations.
-   **Routes:** Defines API routes, connects to middleware, controllers.
-   **Middlewares:** Intercepts requests, applies validation, authentication.
-   **Controllers:** Orchestrates flow, calls business logic services, structures API responses.
-   **Services:** Implements business logic, interacts with repositories.
-   **Repositories:** Handles database interactions using Sequelize.
-   **Database Model:** Defines table structure using Sequelize models.

# Implemented Features

-   **User Authentication:** Secure sign-up and sign-in functionalities.
-   **Password Security:** Bcrypt for password hashing, JWT for token generation.
-   **Folder Structure:** Follows industry-standard MVC for clean, modular code.
-   **Database Integration:** AWS RDS MySQL with Sequelize ORM.
-   **Versioning:** APIs versioned for maintainability.
-   **Deployment:** Hosted on AWS EC2, Nginx proxies requests, HTTPS via Certbot.

# Deployment Details

-   **Cloud Database:** AWS RDS MySQL
-   **Server Hosting:** AWS EC2 Instance
-   **Domain:** ["https://broomees-airline.netlify.app/](https://broomees-airline.netlify.app/)
-   **SSL Certificate:** Applied using Certbot for secure connections.

# Getting Started

To explore and run the project:

1. **Clone Repository:**
    ```bash
    git clone https://github.com/adityasharma2020/broomees_task_backned.git
    ```

install Dependencies:
`npm install`

# .env

### Port for the server

PORT=your_port_number

### Number of salt rounds for bcrypt hashing

SALT_ROUND=your_salt_round_value

### Secret key for JWT (JSON Web Tokens) generation

JWT_KEY=your_jwt_secret_key

### Node environment (can be 'development', 'production', etc.)

NODE_ENV=your_node_environment

Set up Environment:

Configure environment variables in `config/server-config.js`. like :

```
    {
  "PORT": 3000,
  "DB_HOST": "your-db-host",
  "DB_USER": "your-db-user",
  "DB_PASSWORD": "your-db-password",
  "DB_NAME": "your-db-name",
  "JWT_SECRET": "your-jwt-secret"
  // Add other necessary variables
}
```

Run server :
`npm start`
