function CheckArray(array){
    for(let i = 0; i < array.length - 1; i++){
        for(let j = i + 1; j < array.length; j++){
            if(array[i] !== array[j])
                return false;
        }
    }

    return true;
}

let numsArray = [0, 0, 0, 0, 0];
console.log(CheckArray(numsArray));

numsArray = [2, 2, 2, NaN];
console.log(CheckArray(numsArray));