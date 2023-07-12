import { authentication } from './../helpers/index';
import express from 'express';

import { getUsersByEmail, createUser } from 'db/users';
import { random } from 'helpers';

export const register = async (req: express.Request, res: express.Response) => {
	try {
		const { email, password, username } = req.body;

		if (!email || !password || !username) {
			return res.status(400).send('Missing fields');
		}

		const existingUser = await getUsersByEmail(email);

		if (existingUser) {
			return res.status(409).send('User already exists');
		}

		const salt = random();

		const user = await createUser({
			email,
			username,
			authentication: {
				salt,
				password: authentication(salt, password),
			},
		});

		return res.status(200).json(user).end();
	} catch (error) {
		console.log(error);
		return res.sendStatus(400);
	}
};
