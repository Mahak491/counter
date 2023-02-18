var btninc = document.getElementById("increment");
var btndec = document.getElementById("decrement");
var num = document.getElementById("number");

var number = 0;

function increment(){
    number = number+1;
    num.innerHTML = number;
}

function decrement(){
    number = number-1;
    num.innerHTML = number;
    if(number <= 0){
        number = 0;
        num.innerHTML = number;
    }
}

btndec.addEventListener("click",decrement)
btninc.addEventListener("click",increment)