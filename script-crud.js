// Encontrar o botao de adicionar
const btnAdicionarTarefa = document.querySelector('.app__button--add-task');
//formulário de adicionar tarefa
const formAdicionarTarefa = document.querySelector('.app__form-add-task');
// campo textarea de adicionar tarefa
const textArea = document.querySelector('.app__form-textarea');
//tarefa digitada dentro do textarea
const tarefas = [];

function criarElementoTarefa(tarefa) {
    const li = document.createElement('li');
    li.classList.add('app__section-tasks-list-item');

    const svg = document.createElement('svg');
    svg.innerHTML = `<svg>
        <svg class="app__section-task-icon-status" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="12" fill="#FFF"></circle>
            <path d="M9 16.1719L19.5938 5.57812L21 6.98438L9 18.9844L3.42188 13.4062L4.82812 12L9 16.1719Z" fill="#01080E"></path>
        </svg>
    </svg>`;

    const paragrafo = document.createElement('p');
    paragrafo.textContent = tarefa.descricao;

    const botao = document.createElement('button');
    const imgBotao = document.createElement('img');
    imgBotao.setAttribute('src', '/imagens/edit.png');

    botao.append(imgBotao);

    li.append(svg);
    li.append(paragrafo);
    li.append(botao);
}

btnAdicionarTarefa.addEventListener('click', () => {
    formAdicionarTarefa.classList.toggle('hidden');// Alterna a visibilidade do formulário
});

formAdicionarTarefa.addEventListener('submit', (evento) => {
    evento.preventDefault(); // Impede o envio do formulário - para evitar recarregar a página
    const tarefa = {
        descricao: textArea.value
    };
    tarefas.push(tarefa);
    localStorage.setItem('tarefas', JSON.stringify(tarefas)); // Armazena a tarefa no localStorage
});