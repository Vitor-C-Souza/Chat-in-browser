import { alertarERedirecionar, AtualizaTextoEditor } from "./documento.js"

const socket = io()

function selecionarDocumento(nome){    
    socket.emit("selecionar_documento", nome, (texto) =>{
        AtualizaTextoEditor(texto)
    })
}

function EmitirTextoEditor(dados) {
    socket.emit('texto_editor', dados)
}


socket.on('texto_editor_clientes', (texto)=> {
    AtualizaTextoEditor(texto)
})

function emitirExcluirDocumento(nome) {
    socket.emit("excluir_documento", nome)
}

socket.on("excluir_documento_sucesso", (nome) => {
    alertarERedirecionar(nome)
})

export { EmitirTextoEditor, selecionarDocumento, emitirExcluirDocumento }