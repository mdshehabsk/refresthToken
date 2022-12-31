



import * as Joi from 'joi'
export const SignupSchema = Joi.object({
    email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
    password:Joi.string().min(6).max(20).required(),
    cpassword:Joi.any().equal(Joi.ref('password'))
    .required()
    .label('Confirm password')
    .messages({ 'any.only':'Password and {{#label}} does not match' })
})