import jwt from "jsonwebtoken";

function autorizarUsuario (socket, next) { 
  const tokenJwt = socket.handshake.auth.token;

  try {
    // eslint-disable-next-line no-undef
    jwt.verify(tokenJwt, process.env.SEGREDO_JWT);

    next();

  } catch (erro) {
    next(erro);
  }

}

export default autorizarUsuario;