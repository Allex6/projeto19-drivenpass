import joi from 'joi';

const userSchema = joi.object({
	email: joi.string().max(60).required().email(),
	password: joi.string().required()
});

export default userSchema;