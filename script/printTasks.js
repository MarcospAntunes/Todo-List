import counter from "./counter.js";

function printTasks(list, listh2, listContainer, itemCounter) {

    if(sessionStorage.hasOwnProperty("item") && list.length > 0) {
        listh2.style.display = "none";
        listContainer.innerHTML = "";

        list.map((item) => {
            item.status !== "completed" ?
                listContainer.innerHTML += `
                    <li id=${String(item.id)} class="itemContainer ${item.noFilter} ${item.status}">
                        <div>
                            <button class="checkButton"></button>
                            <p>${item.taskName}</p>
                        </div>
                        <button class="deleteButton"><img src="images/icon-cross.svg" alt="delete" class="deleteButton"></button>
                    </li>
                `
            :
                listContainer.innerHTML += `
                    <li id=${String(item.id)} class="itemContainer ${item.noFilter} ${item.status}">
                        <div>
                            <button class="checkButton checked"></button>
                            <p class="checked">${item.taskName}</p>
                        </div>
                        <button class="deleteButton"><img src="images/icon-cross.svg" alt="delete" class="deleteButton"></button>
                    </li>
                `
        })
    } else {
        listContainer.innerHTML = "";
        listh2.style.display = "block";
        listContainer.appendChild(listh2);
    }

    counter(itemCounter);
}

export default printTasks;