import criaHashESalSenha from "../utils/criaHashESalSenha.js";
import { usuariosColection } from "./DBconnect.js";

function encontrarUsuario(nome) {
  return usuariosColection.findOne({ nome });
}

function cadastrarUsuario({ nome, senha }) {
  const { hashSenha, salSenha } = criaHashESalSenha(senha);

  return usuariosColection.insertOne({ nome, hashSenha, salSenha });
}

export { cadastrarUsuario, encontrarUsuario };
