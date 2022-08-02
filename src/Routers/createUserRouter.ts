import express, { Request, Response } from "express";
const Joi = require('joi')
import { validationResult, ValidationError, Result, body } from 'express-validator'
const Router = express.Router()

const createUser = Joi.object().keys({ 
    name: Joi.string().min(3).max(30).required(),
    email: Joi.string().min(3).max(20).required().email(), 
    password: Joi.string().min(6).max(50), 
  }); 
Router.get("/", (req, res) => {
    console.log(req);
    console.log("hello Create User")
    res.send("Hello Create User")
})
Router.post('/create-user',  async (req, res) => {
    const result = createUser.validate(req.body)
    if(result !== null){
        res.send(result.error)
        return;
    }
    const { email, name, password } = req.body
   
})



export { Router as createUserRouter }
