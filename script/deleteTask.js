import printTasks from "./printTasks.js";

function deleteTask(itemList, listh2, listContainer, itemCounter) {
    let all = sessionStorage.hasOwnProperty("item") ? JSON.parse(sessionStorage.getItem("item")) : [];

    sessionStorage.setItem("item", JSON.stringify(all.filter((item) => item.id != itemList.id)));

    all = JSON.parse(sessionStorage.getItem("item"));
    printTasks(all, listh2, listContainer, itemCounter);
}

export default deleteTask;