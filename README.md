## This project aims to set up an Express application with TypeScript, user authentication, and CRUD operations for user management.

## Configuration

Configure TypeScript and Nodemon:

### TypeScript Configuration

- Update TypeScript configuration:
  - Set module to NodeNext
  - Set moduleResolution to node
  - Set baseUrl to ./src
  - Set outDir to ./dist
  - Enable sourceMap generation
  - Enable noImplicitAny
  - Include src/**/* for compilation

### Nodemon Configuration

- Add nodemon.json configuration file
- Configure the file for monitoring and auto-restarting the application

## User Model and CRUD Operations

- Add user model and CRUD operations
- Define user schema using mongoose.Schema with fields for username, email, and authentication
- Implement CRUD operations:
  - getUsers: Get all users
  - getUsersByEmail: Find a user by email
  - getUsersBySessionToken: Find a user by session token
  - getUserById: Find a user by ID
  - createUser: Create a new user
  - deleteUserById: Delete a user by ID
  - updateUserById: Update a user by ID

## User Registration

- Implement user registration controller
- Validate request body for required fields
- Check if user already exists before creating a new user
- Generate random salt and hash the password
- Create a new user and return the user object in the response

## User Login

- Implement user login controller
- Validate request body for required fields
- Check if user exists and verify the password
- Generate a session token and store it in the cookie
- Handle successful login and provide appropriate responses

## Middleware Functions

- Add middleware functions for authentication and authorization
- isAuthenticated: Check if user is authenticated
- isOwner: Check if user is the owner of a resource

## Controller Endpoints

- Implement endpoints for user management
- getAllUsers: Fetch all users
- deleteUser: Delete a user by ID
- updateUser: Update a user's username by ID

## User Routes with Middleware

- Define user routes with middleware for authentication and authorization.
