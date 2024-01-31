function counter(itemCounter) {
    let all = sessionStorage.hasOwnProperty("item") ? JSON.parse(sessionStorage.getItem("item")) : [];
    all = all.filter((item) => item.status === "active");

    if(all.length > 0) {
        itemCounter.innerHTML = `${all.length} items left`

        return
    }

    if(all.length === 0) {
        itemCounter.innerHTML = "No items"

        return
    }
}

export default counter;