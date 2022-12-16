import express, { json } from 'express'
import fetchAll from './fetchAll.js'

const app = express()

app.use(json()) // para procesar el cuerpo de solicitud JSON

app.post('/fetch', async (req, res) => {
  const { urls, type } = req.body

  try {
    const responses = await fetchAll(urls)
    const htmls = await Promise.all(responses.map(response => response[type]()))
    res.json({ htmls })
  } catch (error) {
    res.status(500).send(error.message)
  }
})

app.listen(3000, () => {
  console.log('API listening on port 3000 -> http://localhost:3000')
})
