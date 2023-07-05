import criaHashESalSenha from "../utils/criarSenhaESalSenha.js";
import { usuariosColection } from "./DBconnect.js";

function cadastrarUsuario({ nome, senha }) {
  const { hashSenha, salSenha } = criaHashESalSenha(senha);

  return usuariosColection.insertOne({ nome, hashSenha, salSenha });
}

function encontrarUsuario(nome) {
  return usuariosColection.findOne({ nome });
}

export {cadastrarUsuario, encontrarUsuario};