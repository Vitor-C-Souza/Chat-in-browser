import jwt from "jsonwebtoken";

function gerarJwt(payload) {
  // eslint-disable-next-line no-undef
  const tokenJwt = jwt.sign(payload, process.env.SEGREDO_JWT, {
    expiresIn: "1h",
  });
    
  return tokenJwt;
}

export default gerarJwt;