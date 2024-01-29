function changeTheme(btn) {
    const body = document.querySelector("body");
    
    if(btn.src.endsWith("icon-sun.svg")) {
        btn.src = "../images/icon-moon.svg";
        body.classList.remove("light");
    } else {
        btn.src = "../images/icon-sun.svg";
        body.classList.add("light");
    }  
}

export default changeTheme;
