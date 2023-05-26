const getcolor=()=>{
    const randomNumber=Math.floor(Math.random()*16777215);
    const randomcode="#"+randomNumber.toString(16);
    const c=document.getElementsByClassName("color-code")[0]
    c.innerText=randomcode;
    document.querySelectorAll(".main")[0].style.backgroundColor=randomcode;

}

document.getElementsByClassName("btn")[0].addEventListener(
    "click",
    getcolor
)
getcolor();