let map = new Map([
    ["1", "black"],
    ["2", "white"],
    ["3", "red"],
    ["4", "blue"],
    ["5", "yellow"],
]);

for(let number of map.keys()){
    console.log(`Ключ - ${number}, значение - ${map.get(number)}`);
}