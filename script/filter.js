import printTasks from "./printTasks.js";

function filter(target, listContainer, listh2, btnFilter) {
    let all = sessionStorage.hasOwnProperty("item") ? JSON.parse(sessionStorage.getItem("item")) : [];
    
    btnFilter.forEach(btn => {
        if(btn.classList.contains("selected") && btn !== target) {
            btn.classList.remove("selected")
        }
    });

    if(target.classList[1] !== "all") {
        let filtred = all.filter((item) => item.status === target.classList[1])
        target.classList.add("selected")
        sessionStorage.setItem(`${target.classList[1]}`, JSON.stringify(filtred));
        listh2.children[0].innerText = "No item"
        printTasks(
            sessionStorage.hasOwnProperty(`${target.classList[1]}`) && sessionStorage.getItem(`${target.classList[1]}`).length > 0? 
                JSON.parse(sessionStorage.getItem(`${target.classList[1]}`)) 
                : [], 
            listh2,
            listContainer
        )
    } else {
        printTasks(all, listh2, listContainer)
        target.classList.add("selected")
    }
    
}

export default filter;