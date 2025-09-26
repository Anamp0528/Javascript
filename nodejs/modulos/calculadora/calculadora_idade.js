export function idade(nome,anoNasc,anoAtual) {
    idade = anoAtual - anoNasc;
    return `Olá, ${nome}! em ${anoAtual} você terá ${idade} anos!`;
}