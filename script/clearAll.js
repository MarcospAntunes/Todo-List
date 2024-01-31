import printTasks from "./printTasks.js";

function clearAll(listh2, listContainer) {
    sessionStorage.removeItem("item");

    printTasks([], listh2, listContainer);
}

export default clearAll;