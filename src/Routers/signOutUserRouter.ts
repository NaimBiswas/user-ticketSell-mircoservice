const Router = require("express").Router();
import { Request, Response } from 'express'
const User = require('../models/UserModels');



Router.get("/signout", async (req: Request, res: Response) => {
    const { token } = req.headers

    if (token) {
        await User.findOneAndUpdate({
            token
        }, { $set: { token: null } })
        res.status(200).json({
            message: "User successfully signed out"
        })
    }

})





export default Router
