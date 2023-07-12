import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
import mongoose from 'mongoose';
require('dotenv').config();

const app = express();

app.use(
	cors({
		credentials: true,
	})
);
app.use(bodyParser.json());
app.use(cookieParser());
app.use(compression());

const server = http.createServer(app);

server.listen(8090, () => {
	console.log('server is running on http://localhost:8090/');
});

mongoose.Promise = Promise;
mongoose.connect(process.env.MONGO_URI);
mongoose.connection.on('error', (err) =>
	console.error('MongoDB connection error: ' + err)
);


