//importa o modulo http nativo do Node.js
import http, { request } from 'http';

const PORT = 3000;

//cria servidor
const server = http.createServer((request, response) => {
    const url = request.url;
    const method = request.method;

    //define o metodo da tresposta como HTML
    response.setHeader('Content-Type', 'Text/html; charset=utf-8');

    //roteamento basico
if (url === '/') {
    response.statusCode = 200; //ok
    response.end('<h1>Página Inicial</h1>');

} else if (url === '/sobre' && method === 'GET'){
    response.statusCode = 200; //ok
    response.end ('<h1>Sobre Nós</h1><p>Esta é uma aplicação de um exemplo com Node.js puro.</p>');

} else if (url === '/contato'){
    response.statusCode = 200; //ok
    response.end('<h1>Fale Conosco</h1>');

} else {
    //se nenhuma rota corresponder
    response.statusCode = 404; //not foud
    response.end('<h1>404 - Página não encontrada</h1>');
}
});

//Inicia o servidor para ouvir na porta definida
server.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});