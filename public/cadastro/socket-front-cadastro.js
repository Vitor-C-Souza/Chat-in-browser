// eslint-disable-next-line no-undef
const socket = io();


function emitirCadastrarUsuario(dados) {
  socket.emit("cadastrar_usuario", dados);
}
  
export { emitirCadastrarUsuario };