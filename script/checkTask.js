import printTasks from "./printTasks.js";

function checkTask(target, itemList, itemContainer, listh2, listContainer, itemCounter) {
    let all = sessionStorage.hasOwnProperty("item") ? JSON.parse(sessionStorage.getItem("item")) : [];

    const item = all.filter((item) => item.id == itemList.id)
    all = all.filter((item) => item.id != itemList.id)

    if(itemList.classList.contains("active")) {
        itemList.classList.replace("active", "completed");
        target.classList.add("checked");
        itemContainer.children.item(1).classList.add("checked");

        item[0].status = "completed"
        all.push(item[0])
    } else {
        itemList.classList.replace("completed", "active");
        target.classList.remove("checked");
        itemContainer.children.item(1).classList.remove("checked");
        
        item[0].status = "active"
        all.unshift(item[0])
    }
    
    
    sessionStorage.setItem("item", JSON.stringify(all));
    printTasks(all, listh2, listContainer, itemCounter)
}

export default checkTask;