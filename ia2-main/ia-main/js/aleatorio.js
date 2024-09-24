const nomes = ["CR7, Marley Bob, Steve, Zombi, Bobby, Endrick, Lucia"];

export function aleatorio (lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes)