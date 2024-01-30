function printTasks(listh2, listContainer) {
    let all = sessionStorage.hasOwnProperty("item") ? JSON.parse(sessionStorage.getItem("item")) : [];

    if(sessionStorage.hasOwnProperty("item") && all.length > 0) {
        listh2.style.display = "none";
        listContainer.innerHTML = ""
        all = JSON.parse(sessionStorage.getItem("item"));
        all.map((item) => {
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
        listh2.style.display = "block";
        listContainer.appendChild(listh2)
    }
}

export default printTasks;