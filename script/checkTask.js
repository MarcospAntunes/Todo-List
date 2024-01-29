function checkTask(target, itemList, itemContainer) {
    target.classList.toggle("checked");
    itemList.classList.toggle("active");
    itemList.classList.toggle("completed");
    itemContainer.children.item(1).classList.toggle("checked");
}

export default checkTask;