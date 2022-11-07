const numberRandom = [];
const timer = 3
let i = 1;
const container = document.querySelector(".number-stored")
while(numberRandom.length <= 5){
    var randInt = Math.floor(Math.random()*100);
    
    if(numberRandom.includes(randInt) === false){
        numberRandom.push(randInt);
    }
    i++;
}
const number = document.createElement("div");
number.append(numberRandom)
container.append(number)

setTimeout(function(){
    number.remove()
},timer * 1000);

setTimeout(timeNumber, 4000)
function timeNumber(){
    const numberGessed = [];
 for(let i = 1; i <= 5; i++){
    const numberInsert = prompt("Inserisci un numero");
    if(numberInsert.includes(numberRandom)){
        numberGessed.push(numberRandom);
    }
 }
 console.log(numberGessed);
}

console.log(numberRandom);
