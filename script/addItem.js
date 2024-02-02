import printTasks from "./printTasks.js";

function addItem(input, listh2, listContainer, itemCounter) {
    let all = sessionStorage.hasOwnProperty("item") ? JSON.parse(sessionStorage.getItem("item")) : [];

    if(input.value != "") {
        all.push({
            id: Math.floor(Math.random() * (1000 - 1 + 1)),
            noFilter: "all",
            status: "active",
            taskName: input.value
        });

        sessionStorage.setItem("item", JSON.stringify(all));

        input.value = "";
        
        printTasks(all, listh2, listContainer, itemCounter);
    } else {
        input.value = "Digite o nome da tarefa!";
    }
}

export default addItem;