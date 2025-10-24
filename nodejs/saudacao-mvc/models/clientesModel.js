module.exports = {

gerarMensagemLogin: (login, senha) => {
    let acesso;

    if (login === "Ana Clara" && senha === "05052008"){
        acesso = "liberado";
    } else {
        acesso = "negado";
    }
    return `Olá, ${login}! Seu acesso foi ${acesso}.`;
}
};