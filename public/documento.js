const socket = io()

const textoEditor = document.getElementById('editor-texto')

textoEditor.addEventListener("keyup", () => {
    console.log(textoEditor.value)
    socket.emit('texto_editor', textoEditor.value )
})

socket.on('texto_editor_clientes', (texto)=> {
    console.log(texto)
})