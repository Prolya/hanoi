
// n - количество кружков; start - начало головоломки; finish - стержень, на котором должна оказаться башня
function hanoi(n, start, finish) { 

    // Вспомогательный стержень
    let tmp = 6 - start - finish; 

    if (n == 1) {

        console.log("Кружок " + n + " сместиться с " + start + " на " + finish);

    } else {

        hanoi(n - 1, start, tmp);

        console.log ("Кружок " + n + " сместиться с " + start + " на " + finish);

        hanoi(n-1, tmp, finish);
    
    }
    
}

console.log(hanoi(3, 1, 3));

