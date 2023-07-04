import Express from "express";
import url from "url";
import path from "path";
import http from "http";
import { Server } from "socket.io";

import "./db/DBconnect.js";

const app = Express();
// eslint-disable-next-line no-undef
const porta = process.env.porta || 3000;

const caminhoAtual = url.fileURLToPath(import.meta.url);
const diretorioPublico = path.join(caminhoAtual, "../..", "public");
app.use(Express.static(diretorioPublico));

const servidorHTTP = http.createServer(app);

servidorHTTP.listen(porta, () =>
  console.log(`Servidor escutando na porta ${porta}`)
);

const io = new Server(servidorHTTP);

export default io;
