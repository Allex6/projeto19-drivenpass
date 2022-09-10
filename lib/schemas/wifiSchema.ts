import joi from 'joi';

const wifiSchema = joi.object({
	userId: joi.number().required(),
	label: joi.string().required(),
	name: joi.string().required(),
	password: joi.string().required()
});

export default wifiSchema;