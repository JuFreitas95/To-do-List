
const button = document.querySelector('.button-add-task')
const input = document.querySelector('.input-task')
const listacompleta = document.querySelector('.list-tasks')



let minhalistadeitens = []

function adcionarnovatarefa() {

    minhalistadeitens.push({
        tarefa: input.value,
        concluida: false
    })

    input.value = ''

    mostrartarefas()


}

function mostrartarefas() {

    let novali = ''

    minhalistadeitens.forEach((item, posicao) => {

        novali = novali + `  
        
        <li class="task ${item.concluida && "done"}">
        <img src="./img/checked.png" alt="check-list-tarefa" onclick="concluirtarefa(${posicao})">
         <p>${item.tarefa}</p>
        <img src="./img/trash.png" alt="tarefa-para-excluir" onclick="deletaritem(${posicao})">
         </li>

        `

    })

    listacompleta.innerHTML = novali

    localStorage.setItem('lista', JSON.stringify(minhalistadeitens))
}

function concluirtarefa(posicao) {
    minhalistadeitens[posicao].concluida = !minhalistadeitens[posicao].concluida

    mostrartarefas()

}

function deletaritem(posicao) {
    minhalistadeitens.splice(posicao, 1)

    mostrartarefas()


}

function recarregartela() {

    const tarefasdolocalstorage = localStorage.getItem('lista')
    if (tarefasdolocalstorage) {
        minhalistadeitens = JSON.parse(tarefasdolocalstorage)
    }

    mostrartarefas()
}

recarregartela()

button.addEventListener('click', adcionarnovatarefa)

