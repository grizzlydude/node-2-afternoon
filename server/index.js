const express = require('express')
const message = require('./controllers/messages_controller')

const app = express()
app.use(express.json())
app.use(express.static(__dirname + '/../public/build'))

const messageBaseUrl = '/api/messages'
app.get(messageBaseUrl, message.read)
app.post(messageBaseUrl, message.create)
app.put(`{messageBaseUrl}/:id`, message.update)
app.delete(`{messageBaseUrl}/:id`, message.delete)


const port = 5555

app.listen(port, () => {
    console.log(`Revenge of the Port ${port}`)
})