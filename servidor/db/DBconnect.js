import { MongoClient } from "mongodb";

const cliente = new MongoClient("mongodb+srv://root:6040@main.hlxq1lq.mongodb.net/?retryWrites=true&w=majority");

let documentosColection;

try{
  await cliente.connect();

  const db = cliente.db("alura-websockets");

  documentosColection = db.collection("documentos");

  console.log("conectado no banco de dados com sucesso!!!");

} catch(erro){
  console.log(erro);
}


export { documentosColection };