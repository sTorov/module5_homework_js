function main(){
    let value = prompt("Введите число");

    if(value === null) return;

    if(value.trim().length === 0){
        alert("Необходимо ввести какое-либо значение!");
        return;
    }

    value = +value;

    if(typeof value === "number" && !isNaN(value)){
        if(value === 0){
            alert("Нуль");
        } else if(value % 2 === 0){
            alert("Четное");
        } else{
            alert("Не четное");
        }
    } else{
        alert("Упс, кажется вы ошиблись");
    }
}

main();