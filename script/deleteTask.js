import printTasks from "./printTasks.js";

function deleteTask(itemList, listh2, listContainer) {
    let all = sessionStorage.hasOwnProperty("item") ? JSON.parse(sessionStorage.getItem("item")) : [];

    itemList.remove();
    sessionStorage.setItem("item", JSON.stringify(all.filter((item) => item.id != itemList.id)))
    all = JSON.parse(sessionStorage.getItem("item"));
    printTasks(listh2, listContainer);
}

export default deleteTask;