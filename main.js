import addItem from "./script/addItem.js";
import checkTask from "./script/checkTask.js";
import filter from "./script/filter.js";
import deleteTask from "./script/deleteTask.js";
import printTasks from "./script/printTasks.js";
import changeTheme from "./script/changeTheme.js";
import clearAll from "./script/clearAll.js";

const form = document.querySelector("form").addEventListener("submit", e => e.preventDefault());
const btnAddItem = document.querySelector("#addItem");
const listContainer = document.querySelector("#listContainer");
const input = document.querySelector("#createTodo");
const listh2 = document.querySelector("#listh2");
const btnFilter = document.querySelectorAll(".filter");
const btnTheme = document.querySelector(".btntheme");
const btnClear = document.querySelector("#clear");
const itemCounter = document.querySelector("#itemCounter");
let all = [];

if(sessionStorage.hasOwnProperty("item")) {
    all = JSON.parse(sessionStorage.getItem("item"));
}

printTasks(all, listh2, listContainer, itemCounter);

btnAddItem.addEventListener("click", () => {
    addItem(input, listh2, listContainer, itemCounter);
})

document.addEventListener("click", (e) => {
    const target = e.target;
    const itemContainer = target.closest("div");
    const itemList = target.closest("li");

    if (!itemList) return;

    if (target.classList.contains("checkButton")) {
        checkTask(target, itemList, itemContainer, listh2, listContainer, itemCounter);
    }

    if (target.classList.contains("deleteButton")) {
        deleteTask(itemList, listh2, listContainer, itemCounter);
    }
})

btnFilter.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        filter(e.target, listContainer, listh2, btnFilter, itemCounter)
    })
})

btnClear.addEventListener("click", () => {
    clearAll(listh2, listContainer, itemCounter);
})

btnTheme.addEventListener("click", () => {
    changeTheme(btnTheme);
})