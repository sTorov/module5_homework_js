let x = false;

switch (typeof x){
    case "number":
        console.log(`${x} - число`);
        break;
    case "boolean":
        console.log(`${x} - логическое значение`);
        break;
    case "string":
        console.log(`${x} - строка`);
        break;
    default:
        console.log(`Тип ${x} неопределён`);
}