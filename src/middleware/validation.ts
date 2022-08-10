import Joi from "joi";

const signinUser = Joi.object().keys({
    email: Joi.string().min(3).max(20).required().email(),
    password: Joi.string().min(6).max(50).required(),
})

export {signinUser}










