const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas'); 
const caixaAlternativas = document.querySelector('.caixa-alternativas');   
const caixaResultado = document.querySelector('.caixa-resultado'); 
const textoResultado = document.querySelector('.texto-resultado');

const perguntas = [
    {
    enunciado: "Qual país tem o maior índice de pobreza?",
    alternativas: ["África", "Somália", "Suíça", "Cuba"],
    },
    {
    enunciado: "Qual o estado brasileiro mais racista?",
    alternativas: ["São Paulo", "Paraná", "Rio Granda do Sul", "Santa Catarina"],
    },
    {
    enunciado: "Qual dos seguintes fatores é mais frequentemente citado como uma causa primária da desigualdade social em sociedades modernas?",
    alternativas: ["Distribuição desigual de riqueza e renda", "Localização geográfica", "Preferências culturais", "Condições climáticas"],
    },
    ];

    let atual = 0;
    let perguntaAtual;
    function mostraPergunta() {
        perguntaAtual = perguntas[atual];
        caixaPerguntas.textContent = perguntaAtual.enunciado
        mostraAlternativas();
        }
        function mostraAlternativas() {
            for (const alternativa of perguntaAtual.alternativas) {
            const botaoAlternativas = 
            document.createElement("button");
            botaoAlternativas.textContent = alternativa;
            caixaAlternativas.appendChild(botaoAlternativas);
            }
        }
        mostraPergunta();