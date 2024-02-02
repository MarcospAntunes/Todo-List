function counter(itemCounter) {
    let all = sessionStorage.hasOwnProperty("item") ? JSON.parse(sessionStorage.getItem("item")) : [];
    all = all.filter((item) => item.status === "active");

    itemCounter.forEach((item) => {
        if(all.length > 0) {
            item.innerHTML = `${all.length} items left`
    
            return
        }
    
        if(all.length === 0) {
            item.innerHTML = "No items"
    
            return
        }
    })
}

export default counter;