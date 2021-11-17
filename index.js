const  FACTORIAL_RODS_3 = 6;

function hanoi(numberCircles, startRod, finishRod) { 

    let tmpRod = FACTORIAL_RODS_3 - startRod - finishRod;     
 
    if (numberCircles == 1) {

        print(numberCircles, startRod, finishRod);

    } else {

        hanoi(numberCircles - 1, startRod, tmpRod);

        print(numberCircles, startRod, finishRod);

        hanoi(numberCircles - 1, tmpRod, finishRod);
    
    }
    
}

function print(numberCircles, startRod, finishRod) {

    console.log("Кружок " + numberCircles + " сместиться с " + startRod + " на " + finishRod);
    
}

console.log(hanoi(3, 1, 3));



