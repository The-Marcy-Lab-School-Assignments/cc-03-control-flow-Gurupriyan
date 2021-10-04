//1
function countFromOne(num){
    for (let i =1; i <= num; i++){
        console.log(i);
    }
}

//2
function countEveryOdd(num) {
    for (let i =1; i <= num; i++){
        if (i % 2 != 0){
            console.log(i);
        }
    }
}

//3
function isNegative(num) {
    if ( num < 0){
        return true;
    } else if ( num > 0){
        return false;
    }
}

//4
function betweenFiveAndTwenty(num) {
    if (num >= 5 && num <=12 ){
        return true;
    } else return false;
}

//5
function isAllLowerCase (string) {
    if (string === string.toLowerCase()){
        return true;
    } else return false
}

//6
let numOfMultipleOfFive = 0;
function countMultiplesOfFive(array) {
    for (let i =0; i < array.length; i++){
        if(array[i] % 5 === 0){
            numOfMultipleOfFive++;
        }
    }
    return numOfMultipleOfFive;
}

//countFromOne(12);
//countEveryOdd(15);
//console.log(isNegative(Math.PI));
//console.log(betweenFiveAndTwenty(17));
//console.log(isAllLowerCase('hellooooo'));
console.log(countMultiplesOfFive([2,6, 14]));