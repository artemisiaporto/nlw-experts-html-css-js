const perguntas = [
  {
    pergunta: "Qual é a função do operador '===' em JavaScript?",
    respostas: [
      "Compara valores sem considerar o tipo de dado",
      "Compara valores e tipos de dados",
      "Realiza uma atribuição de valor",
    ],
    correta: 1
  },
  {
    pergunta: "O que é o DOM em JavaScript?",
    respostas: [
      "Uma linguagem de programação",
      "Um modelo de objeto para manipulação de documentos HTML",
      "Um framework popular",
    ],
    correta: 1
  },
  {
    pergunta: "Qual é a diferença entre 'let' e 'const' na declaração de variáveis?",
    respostas: [
      "Ambos são iguais e podem ser usados indistintamente",
      "'let' é usado para variáveis mutáveis, enquanto 'const' é usado para constantes imutáveis",
      "'const' é usado para variáveis mutáveis, enquanto 'let' é usado para constantes imutáveis",
    ],
    correta: 1
  },
  {
    pergunta: "O que é um callback em JavaScript?",
    respostas: [
      "Um tipo de função que não recebe argumentos",
      "Uma função passada como argumento para outra função",
      "Um método de iteração sobre arrays",
    ],
    correta: 1
  },
  {
    pergunta: "Como se declara um array em JavaScript?",
    respostas: [
      "array = []",
      "array = {}",
      "let array = ()",
    ],
    correta: 0
  },
  {
    pergunta: "O que é o hoisting em JavaScript?",
    respostas: [
      "Um método de organização de código",
      "O comportamento de mover declarações para o topo de um escopo durante a fase de compilação",
      "Uma técnica para melhorar o desempenho de funções",
    ],
    correta: 1
  },
  {
    pergunta: "Qual é a função do método 'map()' em arrays?",
    respostas: [
      "Modificar todos os elementos do array",
      "Mapear os elementos do array e retornar um novo array com as modificações",
      "Remover elementos específicos do array",
    ],
    correta: 1
  },
  {
    pergunta: "O que é o operador ternário em JavaScript?",
    respostas: [
      "Um operador lógico que retorna três valores",
      "Um operador que compara três variáveis",
      "Um operador condicional que retorna um valor com base em uma expressão",
    ],
    correta: 2
  },
  {
    pergunta: "Qual é a diferença entre 'null' e 'undefined' em JavaScript?",
    respostas: [
      "'null' representa a ausência intencional de qualquer objeto ou valor",
      "'undefined' é usado para variáveis que foram declaradas, mas não têm valor atribuído",
      "Ambos representam a mesma coisa",
    ],
    correta: 0
  },
  {
    pergunta: "O que é o conceito de 'closure' em JavaScript?",
    respostas: [
      "Uma maneira de fechar o navegador",
      "Um tipo de erro de sintaxe",
      "Uma função que 'captura' variáveis de um escopo externo",
    ],
    correta: 2
  }
];
//seleciona o div com id quiz
const quiz = document.querySelector('#quiz')
//seleciona o elemento template
const template = document.querySelector('template')
//cria um objeto específico 'Set', no qual nunca se pode repetir o que há dentro dele
const corretas = new Set()
//total te perguntas corretas
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

//loop ou laço de repetição
//monta a parte das perguntas
for(const item of perguntas) {
  //clonando o template
  const quizItem = template.content.cloneNode(true)
  //alterando o h3 em cada item
  quizItem.querySelector('h3').textContent = item.pergunta
  //monta a parte das respostas
  for(let resposta of item.respostas) {
    //dentro de um dl procura um dt
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    //garante que o texto da resposta estará ao lado da opção de selecioná-la
    dt.querySelector('span').textContent = resposta
    //salva a posição do item/objeto dentro do array, permitindo selecionar uma resposta por pergunta
    dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
    //guarda os valores do índice de cada resposta
    dt.querySelector('input').value = item.respostas.indexOf(resposta)
    //verifica se o índice da resposta selecionada tem o mesmo valor que a variável 'correta'
    dt.querySelector('input').onchange = (event) => {
      //linha para testar se o índice está correto
      //alert(event.target.value)
      //retorna true se o valor for igual ao da resposta correta, retorna false caso contrário
      const estaCorreta = event.target.value == item.correta
      //deleta o item se estiver errado
      corretas.delete(item)
      if (estaCorreta) {
        //adiciona o item no conjunto de respostas corretas
        corretas.add(item)
      }
      //mostra a quantidade de respostas corretas
      //alert(corretas.size)
      mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
    }
    //acrescenta a resposta à lista de respostas
    quizItem.querySelector('dl').appendChild(dt)
  }
  //remove o "Resposta A" que estava aparecendo, porque foi o elemento inicial que foi clonado
  quizItem.querySelector('dl dt').remove()
  //coloca uma pergunta e suas respostas na tela
  quiz.appendChild(quizItem)
}