// npm packages
import express from 'express'
import bodyParser from 'body-parser'

// init app
const app = express()

// add body paring
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
// test method
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// catch all unhandled errors
app.use((err, req, res) => {
  console.error(err.stack)
  res.status(500).send(err)
})

// export app
export default app
