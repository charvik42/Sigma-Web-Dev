let button = document.getElementById("btn");


button.addEventListener("dblclick", ()=>{
    document.querySelector(".box").innerHTML = "<b>Yayy you were clicked <b> enjoy your click!"
})

document.addEventListener("contextmenu", ()=>{
    alert("Don't hack us by right-click please");
})

document.addEventListener("keydown", (e)=>{
    console.log(e, e.key);
})