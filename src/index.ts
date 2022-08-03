import express from 'express'
import { json } from 'body-parser'
import getAllUsers from './Routers/getAllUsers'
import signInUserRouter from './Routers/signInUserRouter'
import signOutUserRouter from './Routers/signOutUserRouter'
import { createUserRouter } from './Routers/createUserRouter'
const DbConnection = require('./db/DbConnection')
var morgan = require('morgan')
const app = express()
const port = process.env.PORT || 3000
app.use(json())
app.use(express.json())
app.use(morgan('dev'))

app.use('/api', getAllUsers)
app.use('/api', signInUserRouter)
app.use('/api', signOutUserRouter)
app.use('/api/users', createUserRouter)

app.get("/", (req, res) => res.send("User Service"))



app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
    DbConnection
}
)