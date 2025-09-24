let buttonadc = document.querySelector("#buttonadc");
let writeTask = document.querySelector("#writeTask");
let list = document.querySelector("ul");

buttonadc.addEventListener("click", function(){
    let task = writeTask.value; // pega o valor do input

    let itemtask = document.createElement("li"); // cria o <li>
    let check = document.createElement("input"); // cria o checkbox
    check.type = "checkbox";

    // adiciona dentro do li
    itemtask.appendChild(check);
    itemtask.appendChild(document.createTextNode(task));

    // adiciona o li na lista
    list.appendChild(itemtask);

    // limpa o input
    writeTask.value = "";
    });