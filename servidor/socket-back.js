import {
  adicionarDocumento,
  atualizaDocumento,
  encontrarDocumento,
  excluirDocumento,
  obterDocumentos,
} from "./db/documentosDB.js";
import io from "./index.js";

// eslint-disable-next-line no-unused-vars
const documentos = [
  {
    nome: "JavaScript",
    texto: "texto de javascript...",
  },
  {
    nome: "Node",
    texto: "texto de node...",
  },
  {
    nome: "Socket.io",
    texto: "texto de socket.io...",
  },
];

io.on("connection", (socket) => {
  socket.on("obter_documentos", async (devolverDocumentos) => {
    const documentos = await obterDocumentos();

    devolverDocumentos(documentos);
  });

  socket.on("adicionar_documento", async (nome) => {
    const documentoExiste = (await encontrarDocumento(nome)) !== null;

    if (documentoExiste) {
      socket.emit("documento_existente", nome);
    } else {
      const resultado = await adicionarDocumento(nome);

      if (resultado.acknowledged) {
        io.emit("adicionar_documento_interface", nome);
      }
    }
  });

  socket.on("selecionar_documento", async (nomeDocumento, devolverTexto) => {
    socket.join(nomeDocumento);

    const documento = await encontrarDocumento(nomeDocumento);

    if (documento) {
      devolverTexto(documento.texto);
    }
  });

  socket.on("texto_editor", async ({ texto, nomeDocumento }) => {
    const atualizacao = await atualizaDocumento(nomeDocumento, texto);

    if (atualizacao.modifiedCount) {
      socket.to(nomeDocumento).emit("texto_editor_clientes", texto);
    }
  });

  socket.on("excluir_documento", async (nome) => {
    const resultado = await excluirDocumento(nome);

    if (resultado.deletedCount) {
      io.emit("excluir_documento_sucesso", nome);
    }
  });
});
