const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Durante uma consulta médica de rotina, você descobre que o hospital passou a utilizar um algoritmo de Inteligência Artificial para analisar exames de imagem e sugerir diagnósticos precoces. Qual o seu primeiro pensamento?",
        alternativas: [
            {
                texto: "Fico receoso com a precisão e com o risco de falhas no diagnóstico automático.",
                afirmacao: "No início, sentiu desconfiança sobre a capacidade das máquinas em avaliar a saúde humana."
            },
            {
                texto: "Acho incrível a possibilidade de detectar doenças antes mesmo dos sintomas surgirem!",
                afirmacao: "Enxergou de imediato o potencial revolucionário da IA para salvar vidas."
            }
        ]
    },
    {
        enunciado: "Em uma feira de ciências da escola, sua equipe precisa apresentar uma proposta sobre o uso da IA no atendimento a pacientes em postos de saúde. Como você decide estruturar o projeto?",
        alternativas: [
            {
                texto: "Utiliza um assistente virtual de IA para filtrar artigos científicos e resumir casos de sucesso em diagnósticos preventivos.",
                afirmacao: "Aprendeu a utilizar a IA como ferramenta de pesquisa para otimizar o acesso a dados médicos complexos."
            },
            {
                texto: "Entrevista profissionais de saúde locais para entender os gargalos no atendimento e propõe soluções baseadas nessa vivência humana.",
                afirmacao: "Preferiu priorizar a escuta ativa e a experiência direta com profissionais da saúde."
            }
        ]
    },
    {
        enunciado: "Durante um debate em sala de aula, surge a questão: 'A IA pode substituir médicos e enfermeiros no futuro?'. Como você se posiciona?",
        alternativas: [
            {
                texto: "Acredito que a IA deve ser uma aliada para automatizar burocracias, deixando os profissionais com mais tempo para o cuidado humano.",
                afirmacao: "Defendeu que a tecnologia deve humanizar a medicina, liberando tempo para a empatia no atendimento."
            },
            {
                texto: "Defendo que decisões médicas complexas devem continuar sendo 100% humanas para evitar vieses e erros algorítmicos.",
                afirmacao: "Lutou pela preservação do julgamento humano e da ética em decisões críticas de saúde."
            }
        ]
    },
    {
        enunciado: "Para ilustrar uma campanha de conscientização sobre a saúde mental e tecnologia, você precisa criar o material visual da apresentação. O que você faz?",
        alternativas: [
            {
                texto: "Cria ilustrações manuais ou em editores gráficos tradicionais para expressar sentimentos e emoções autênticas.",
                afirmacao: "Valorizou a expressão artística tradicional para traduzir a complexidade das emoções humanas."
            },
            {
                texto: "Usa um gerador de imagens por IA para criar representações visuais conceituais de conexões neurais e bem-estar.",
                afirmacao: "Dominou o uso de geradores de imagem para criar conceitos visuais impactantes sobre medicina e ciência."
            }
        ]
    },
    {
        enunciado: "Um aplicativo de triagem médica baseado em IA recomendou um tratamento invasivo para um parente seu, mas o médico responsável discordou da indicação do algoritmo. Como você avalia a situação?",
        alternativas: [
            {
                texto: "O aplicativo analisa dados globais instantaneamente, então a IA provavelmente encontrou algo que o médico não viu.",
                afirmacao: "Apostou excessivamente nos diagnósticos automatizados, correndo o risco de ignorar a intuição clínica humana."
            },
            {
                texto: "A IA é apenas uma ferramenta de suporte; a palavra final e a responsabilidade ética devem ser do médico especialista.",
                afirmacao: "Compreendeu que a IA serve como suporte complementar, mas que a responsabilidade final do cuidado é sempre humana."
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

mostraPergunta();
