import { documentosColection } from "./DBconnect.js"

function encontrarDocumento(nome) {
    const documento = documentosColection.findOne({
      nome
    })

    return documento
}

function atualizaDocumento(nome, texto){
    const atualizacao = documentosColection.updateOne({
        nome
    }, {
        $set:{
            texto
        }            
    })

    return atualizacao
}

export { encontrarDocumento, atualizaDocumento }