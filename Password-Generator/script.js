const uppercase="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowercase="abcdefghijklmnopqrstuvwxyz"
const numbers='1234567890'
const symbols='!@#$%^&*()~_+/'

// selectors

const passbox=document.getElementById("genpass")
const leninput=document.getElementById("passlength")
const upperinput=document.getElementById("upper-case")
const lowerinput=document.getElementById("lower-case")
const numinput=document.getElementById("numbers")
const symbolinput=document.getElementById("symbol")

const getRandomData=(dataset)=>{
    return dataset[Math.floor(Math.random()*dataset.length)]
}

const generatePass=(password="")=>{
    if (upperinput.checked){
        password+=getRandomData(uppercase)
    }
    if (lowerinput.checked){
        password+=getRandomData(lowercase)
    }
    if (numinput.checked){
        password+=getRandomData(numbers)
    }
    if (symbolinput.checked){
        password+=getRandomData(symbols)
    }
    if (password.length< leninput.value){
        return generatePass(password)
    }
    if (password.length>leninput.value)
    {
        const substr=password.substring(0,leninput.value)
        return substr
        
    }
    else{
        return password
    }
}

passbox.innerText=generatePass();

document.getElementsByClassName("btn")[0].addEventListener(
    "click",
    function(){
        const newpass=generatePass();
        passbox.innerText=newpass
    }
)

document.getElementsByTagName("i")[0].addEventListener(
    "click",
    function(){
        navigator.clipboard.writeText(passbox.innerText)
    }
)

