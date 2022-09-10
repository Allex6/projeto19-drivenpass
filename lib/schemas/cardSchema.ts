import joi from 'joi';

const cardSchema = joi.object({
	userId: joi.number().required(),
	label: joi.string().required(),
	cardNumber: joi.string().required(),
	cardHolderName: joi.string().required(),
	securityCode: joi.string().length(3).required(),
	expirationDate: joi.string().length(5).required(),
	password: joi.string().required(),
	isVirtual: joi.boolean().required(),
	type: joi.string().valid('credit', 'debit', 'credit_debit').required()
});

export default cardSchema;