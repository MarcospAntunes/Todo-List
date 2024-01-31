import printTasks from "./printTasks.js";

function clearAll(listh2, listContainer, itemCounter) {
    sessionStorage.removeItem("item");

    printTasks([], listh2, listContainer, itemCounter);
}

export default clearAll;