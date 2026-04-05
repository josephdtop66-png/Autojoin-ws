const WebSocket = require('ws')
const server = new WebSocket.Server({ port: process.env.PORT || 8765 })

const clients = new Set()

server.on('connection', ws => {
    console.log('Client connected!')
    clients.add(ws)

    ws.on('message', msg => {
        console.log('Received:', msg)
        clients.forEach(client => {
            if (client !== ws && client.readyState === 1) {
                client.send(msg)
            }
        })
    })

    ws.on('close', () => {
        clients.delete(ws)
        console.log('Client disconnected')
    })
})

console.log('WebSocket server running')
