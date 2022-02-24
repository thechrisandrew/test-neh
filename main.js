const express = require('express')
const helmet = require('helmet')
const ejs = require('ejs')

const app = express()
const port = 3000

app.use(helmet())

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render('layout', { title: 'Hey', message: 'Hello there!' })
})

app.listen(port, () => {
  console.log(`Example app listening on port: ${port}`)
})