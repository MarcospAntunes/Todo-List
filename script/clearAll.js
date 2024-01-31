import printTasks from "./printTasks.js";

function clearAll(listh2, listContainer) {
    sessionStorage.removeItem("item");
    sessionStorage.removeItem("active");
    sessionStorage.removeItem("completed");

    printTasks([], listh2, listContainer);
}

export default clearAll;