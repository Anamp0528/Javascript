const clientesModel = require('../models/clientesModel');
module.exports = {

clientes: (req, res) => {
    res.sendFile('clientes.html', { root: './views' });
  },
  formularioClientes: (req, res) => {
    res.sendFile('formularioClientes.html', { root: './views' });
  },
  login: (req, res) => {
      const { login, senha } = req.body;
      const mensagem = clientesModel.gerarMensagemLogin(login, senha);
      res.send(`<h1>${mensagem}</h1>`);
    }
};