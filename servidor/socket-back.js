import "dotenv/config";

import io from "./index.js";
import registrarEventosCadastro from "./registrarEventos/Cadastro.js";
import registrarEventosDocumento from "./registrarEventos/Documento.js";
import registrarEventosInicio from "./registrarEventos/Inicio.js";
import registrarEventosLogin from "./registrarEventos/login.js";
import autorizarUsuario from "./middlewares/autorizarUsuario.js";

const nspUsuarios = io.of("/usuarios");

nspUsuarios.use(autorizarUsuario);

nspUsuarios.on("connection", (socket) => {
  registrarEventosInicio(socket, io);
  registrarEventosDocumento(socket, io);

});

io.of("/").on("connection", (socket) => {
  registrarEventosCadastro(socket, io);
  registrarEventosLogin(socket, io);
});
