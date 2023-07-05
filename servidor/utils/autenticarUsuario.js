import { scryptSync, timingSafeEqual } from "crypto";

function autenticarUsuario(senhaDigitada, usuario) {
  const hashTeste = scryptSync(senhaDigitada, usuario.salSenha, 64);

  // eslint-disable-next-line no-undef
  const hashReal = Buffer.from(usuario.hashSenha, "hex");

  const autenticado = timingSafeEqual(hashTeste, hashReal);

  return autenticado;
}

export default autenticarUsuario;
