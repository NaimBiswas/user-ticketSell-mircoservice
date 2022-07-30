import express from 'express'
import {json} from 'body-parser'
const app = express()
app.use(json())
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))