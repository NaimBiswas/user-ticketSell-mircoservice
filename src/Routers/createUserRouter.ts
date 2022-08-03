const express = require("express");
const Joi = require('joi')
const User = require('../models/UserModels')
const Router = express.Router()

const createUser = Joi.object().keys({
    name: Joi.string().min(3).max(30).required(),
    email: Joi.string().min(3).max(20).required().email(),
    password: Joi.string().min(6).max(50).required(),
});
Router.get("/", (req: any, res: any) => {
    console.log(req);
    console.log("hello Create User")
    res.send("Hello Create User")
})
Router.post('/create-user', async (req: any, res: any) => {
    const result = createUser.validate(req.body)
    if (result && result.error) {
        res.send(result.error)
        return;
    }
    const newUsr = User.create({
        email: req.body.email,
        name: req.body.name,
        password: req.body.password
    }).
        then((result: any) => {
            res.status(201).json({
                messsage: "User Created Success",
                result
            })
        }).catch((err: any) => {
            res.status(400).json({
                message: "Something went wrong",
                err
            })
        })

})



export { Router as createUserRouter }
