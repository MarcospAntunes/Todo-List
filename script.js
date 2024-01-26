const form = document.querySelector("form").addEventListener("submit", e => e.preventDefault());
const btnAddItem = document.querySelector("#addItem");
const listContainer = document.querySelector("#listContainer");
const input = document.querySelector("#createTodo");
const listh2 = document.querySelector("#listh2");
const filterAll = document.querySelector(".all");
const filterActive = document.querySelector(".active");
const filterCompleted = document.querySelector(".completed");
let tasks = [];
let all = [];

if(sessionStorage.hasOwnProperty("item")) {
    all = JSON.parse(sessionStorage.getItem("item"));
}

function printTasks(list = all) {
    if(sessionStorage.hasOwnProperty("item") && list.length > 0) {
        listh2.style.display = "none";
        listContainer.innerHTML = ""
        list = JSON.parse(sessionStorage.getItem("item"));
        list.map((item) => {
            listContainer.innerHTML += `
                <li id=${String(item.id)} class="itemContainer ${item.noFilter} ${item.status}">
                    <div>
                        <button class="checkButton"></button>
                        <p>${item.taskName}</p>
                    </div>
                    <button class="deleteButton"><img src="images/icon-cross.svg" alt="delete" class="deleteButton"></button>
                </li>
            `
        })
    } else {
        listh2.style.display = "block";
        listContainer.appendChild(listh2)
    }
}

printTasks()

btnAddItem.addEventListener("click", () => {
    if(input.value != "") {
        all.push({
            id: Math.floor(Math.random() * (1000 - 1 + 1)),
            noFilter: "all",
            status: "active",
            taskName: input.value
        })
        sessionStorage.setItem("item", JSON.stringify(all));

        input.value = "";
        
        printTasks(all)
    } else {
        input.value = "Digite o nome da tarefa!";
    }
    
})

document.addEventListener("click", (e) => {
    const target = e.target;
    const itemContainer = target.closest("div");
    const itemList = target.closest("li");

    if (!parent) return;

    if (target.classList.contains("checkButton")) {
        target.classList.toggle("checked");
        itemList.classList.toggle("active");
        itemList.classList.toggle("completed");
        itemContainer.children.item(1).classList.toggle("checked");
    }

    if (target.classList.contains("deleteButton")) {
        itemList.remove();
        sessionStorage.setItem("item", JSON.stringify(all.filter((item) => item.id != itemList.id)))
        all = JSON.parse(sessionStorage.getItem("item"));
        printTasks(all)
    }
})

filterAll.addEventListener(("click"), (e) => {
    filter(e.target.classList[1])
})

function filter(target) {
   
}