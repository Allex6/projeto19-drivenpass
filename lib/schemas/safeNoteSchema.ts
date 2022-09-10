import joi from 'joi';

const safeNoteSchema = joi.object({
	userId: joi.number().required(),
	label: joi.string().max(50).required(),
	content: joi.string().max(1000).required()
});

export default safeNoteSchema;