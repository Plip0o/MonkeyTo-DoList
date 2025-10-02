let inputT = document.getElementById('inputT')
let addBtn = document.getElementById('addBtn')
let ulL = document.getElementById('ulL')

addBtn.addEventListener('click', () => {
    let task = inputT.value

    const li = document.createElement('li')
    li.textContent = task
    
    ulL.appendChild(li)
}) 