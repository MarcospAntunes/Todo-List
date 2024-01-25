const form = document.querySelector("form").addEventListener("submit", e => e.preventDefault());
const btnAddItem = document.querySelector("#addItem");
const listContainer = document.querySelector("#listContainer");
const input = document.querySelector("#createTodo");
const listh2 = document.querySelector("#listh2");

btnAddItem.addEventListener("click", () => {
    if(input.value != "") {
        listh2.style.display = "none";
        listContainer.innerHTML += `
            <li class="itemContainer">
                <div>
                    <button class="checkButton""></button>
                    <p>${input.value}</p>
                </div>
                <button class="deleteButton"><img src="images/icon-cross.svg" alt="delete" class="deleteButton"></button>
            </li>
        `;
        input.value = "";
    } else {
        console.log("Digite o nome da tarefa!");
    }
    
})

document.addEventListener("click", (e) => {
    const target = e.target;
    const itemContainer = target.closest("div");
    const itemList = target.closest("li");

    if (!parent) {
        return;
    }

    if (target.classList.contains("checkButton")) {
        target.classList.toggle("checked");
        itemContainer.children.item(1).classList.toggle("checked");
    }

    if (target.classList.contains("deleteButton")) {
        itemList.remove();

    }
})