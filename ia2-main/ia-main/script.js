import { aleatorio, nome } from './aleatorio.js';
import { perguntas } from './perguntas.js'


const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "É responsável dar comida típica para animais em adoção?",
        alternativas: [
            {
                texto: "Sim!",
                afirmacao: "Porque pode diminuir a quantidade de animais passando fome."
            },
            {
                texto: "Não!",
                afirmacao: "Porque faz mal."
            }
        ]
    },
    {
        enunciado: "Como o acompanhamento veterinário pode influenciar a saúde dos animais em desfiles culturais e como a coleta seletiva ajuda para a sustentabilidade desses eventos?",
        alternativas: [
            {
                texto: "Sim!",
                afirmacao: "Porque diminui a quantidade de gente doente."
            },
            {
                texto: "Não!",
                afirmacao: "Porque pode ser mal utilizado pelos usuários."
            }
        ]
    },
    {
        enunciado: "É responsável praticar esportes com roupas indígenas?",
        alternativas: [
            {
                texto: "Sim!",
                afirmacao: "Incentiva a cultura."
            },
            {
                texto: "Não!",
                afirmacao: "É preconceituoso."
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

function aleatorio(lista){
    const posicao = Math.floor(Math.random()*lista.length);
    return lista[posicao];
}

function jogaNovamente() {
    atual = 0;
    historiaFinal = "";
    caixaResultado.classList.remove("mostrar");
    mostraPergunta();
}

function substituiNome() {
    for (const pergunta of perguntas) {
        pergunta.enunciado = pergunta.enunciado.replace(/você/g, nome);
    }
}

substituiNome();

