import joi from 'joi';

const credentialSchema = joi.object({
	userId: joi.number().required(),
	label: joi.string().required(),
	url: joi.string().required(),
	username: joi.string().required(),
	password: joi.string().required()
});

export default credentialSchema;