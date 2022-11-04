const numberRandom = [];
let i = 1;
const container = document.querySelector(".number-stored")
while(numberRandom.length <= 5){
    var randInt = Math.floor(Math.random()*10);
    
    if(numberRandom.includes(randInt) === false){
        numberRandom.push(randInt);
        const number = document.createElement("div");
        number.append(numberRandom)
        container.append(number)
    }
    i++;
}
console.log(numberRandom);

