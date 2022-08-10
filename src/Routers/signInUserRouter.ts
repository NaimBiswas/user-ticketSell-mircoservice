const Router = require("express").Router();
import { Request, Response } from 'express'
import { signinUser } from '../middleware/validation';
const jwt = require('jsonwebtoken')
const User = require('../models/UserModels')


Router.get('/signin', async (req: Request, res: Response) => {
    res.send("hello Signin World")
})


Router.post('/signin', async (req: Request, res: Response) => {
    const result = signinUser.validate(req.body)
    if (result && result.error) {
        res.send(result.error)
        return;
    }
    const { email, password } = req.body
    const allReadyExist = await User.find({ email })
    if (!allReadyExist && !allReadyExist.length) {
        res.status(400).json({
            messsage: "No User Found with this email",
            allReadyExist
        })
        return
    }
    const UserSignIn = await User.find({ email, password })
    if (UserSignIn) {
        const token = jwt.sign({ UserSignIn }, 'NaimBiswas')
        res.status(201).json({
            messsage: "User has been signed in",
            UserSignIn,
            token
        })
        await User.findOneAndUpdate({ email: email }, { $set: { token: token } })
    }
})









export default Router
