import { documentosColection } from "./DBconnect.js";

function obterDocumentos() {

  const documentos = documentosColection.find().toArray();

  return documentos;

}

function adicionarDocumento(nome){
  const resultado = documentosColection.insertOne({
    nome,
    texto: ""
  });
  return resultado;
}

function encontrarDocumento(nome) {
  const documento = documentosColection.findOne({
    nome
  });

  return documento;
}

function atualizaDocumento(nome, texto){
  const atualizacao = documentosColection.updateOne({
    nome
  }, {
    $set:{
      texto
    }            
  });

  return atualizacao;
}

function excluirDocumento(nome) {
  const resultado = documentosColection.deleteOne({
    nome,
  });

  return resultado;
}

export { encontrarDocumento,
  atualizaDocumento,
  obterDocumentos, 
  adicionarDocumento, 
  excluirDocumento 
};