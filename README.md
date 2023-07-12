# Setting Up Process

## chore(typescript): Update TypeScript configuration

- Set module to NodeNext
- Set moduleResolution to node
- Set baseUrl to ./src
- Set outDir to ./dist
- Enable sourceMap generation
- Enable noImplicitAny
- Include src/**/* for compilation


## chore(nodemon): Add nodemon.json configuration file

- Add nodemon.json configuration file
- Configure the file with settings for monitoring and auto-restarting the application

## feat(express): Add Express application and server configuration

- Import libraries such as express, http, bodyParser, cookieParser, compression, and cors
- Create an instance of the Express application
- Configure cors middleware to allow cross-origin requests
- Configure bodyParser middleware to parse JSON request bodies
- Configure cookieParser middleware to parse cookies in requests
- Configure compression middleware to compress responses
- Create an HTTP server and use the Express application as the request handler
- Listen on port 8080 and print server running information
