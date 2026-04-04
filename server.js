const WebSocket = require('ws')
const server = new WebSocket.Server({ port: process.env.PORT || 8765 })

server.on('connection', ws => {
    console.log('Script connected!')

    ws.on('message', msg => {
        console.log('Received:', msg)
    })

    ws.on('close', () => {
        console.log('Script disconnected')
    })
})

console.log('WebSocket server running')
