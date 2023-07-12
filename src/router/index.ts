import authentication from './authentication';
import express from 'express';

const router = express.Router();

export default (): express.Router => {
	authentication(router);

	return router;
};
