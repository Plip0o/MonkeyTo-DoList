let inputT = document.getElementById('inputT')
let addBtn = document.getElementById('addBtn')
let ulL = document.getElementById('ulL')

addBtn.addEventListener('click', () => {
    let task = inputT.value
    if (task === "") return

    const li = document.createElement('li')
    li.textContent = task

    ulL.appendChild(li)

    inputT.value = ""

    const deleteBtn = document.createElement('img')
    deleteBtn.src = "image/excluir.png"
    deleteBtn.alt = "botão de excluir"

    deleteBtn.addEventListener('click', () => {
        li.remove()
    })

    li.appendChild(deleteBtn)

    const edittask = document.createElement('img')
    edittask.src = "image/editar.png"
    edittask.alt = "botão de editar"

    li.appendChild(edittask)

    edittask.addEventListener("click", () => {
        const novoTexto = prompt("Edite sua tarefa:", li.firstChild.textContent)
        if (novoTexto !== null && novoTexto.trim() !== "") {
            li.firstChild.textContent = novoTexto.trim()
        }
        // edittask = copiei colei, não entendi, vou estudar mais 
    })

}) 