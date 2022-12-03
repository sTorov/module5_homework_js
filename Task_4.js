function GetRandomInt(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let rand = GetRandomInt(0, 100);
console.log(rand);