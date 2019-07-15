let messages = []
let id = 0

module.exports = {
    create: (req, rest) => {
        const {text, time} = req.body 
        messages.push({id, text, time})
        id++
        rest.status(200).send(messages)
    },
    read: (req, rest) => {
        rest.status(200).send(messages)
    },
    update: (req, rest) => {    
        const { text } = req.body
        const updateId =  req.params.id
        const messageIndex = messages.findIndex(message => message.id == updateId)
        let message = messages[messageIndex]

        messages[messageIndex] = {
            id: message.id,
            test: test || message.text,
            time: message.time
        }
        
        rest.status(200).send(messages)
    },
    delete: (req, rest) => {
        const deleteId = req.params.id 
        messageIndex = messages.findIndex(message => message.id == deleteId)
        messages.splice(messageIndex, 1)
        res.status(200).send(messages)
    }
}