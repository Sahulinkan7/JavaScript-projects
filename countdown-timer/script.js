const enddate="25 May 2023 11:59 AM"

document.getElementsByTagName("span")[0].innerText=enddate;

const inputs=document.querySelectorAll('input')
const clock=()=>{
    const now=new Date()
    const end=new Date(enddate)
    const diff=(end-now)/1000;
    
    if (diff<0){
        return;
    }
    if (diff<300)
    {
        inputs[2].classList.add("red");
        inputs[3].classList.add("red");
    }

    inputs[0].value=Math.floor(diff/3600/24);
    inputs[1].value=Math.floor(diff/3600)%24;
    inputs[2].value=Math.floor(diff/60)%60;
    inputs[3].value=Math.floor(diff)%60;

}

clock();

setInterval(()=>{
    clock(),
    1000
})