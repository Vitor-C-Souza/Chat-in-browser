import io from "./index.js"

io.on("connection", (socket) => {
    console.log("Um cliente se conectou! ID: ", socket.id)

    socket.on('texto_editor', (texto) => {
        console.log(texto)
        io.emit('texto_editor_clientes', texto)
    })
})