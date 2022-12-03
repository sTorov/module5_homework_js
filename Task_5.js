let numArr = [1, 3, 4, 5, 0];
console.log(`Длина массива = ${numArr.length}`);

numArr.forEach((item, index) => console.log(`[${index}] - ${item}`));

console.log("");
//или

for(let i = 0; i < numArr.length; i++)
    console.log(`[${i}] - ${numArr[i]}`);