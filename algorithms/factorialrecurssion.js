function findFactorialRecusive(number){
    if(number <= 2){
        if(number === 0){
            return 1;
        }
        return number;
    }
   return number * findFactorialIterative(number-1);
} // O(n)

function findFactorialIterative(number){
    if(number <= 2){
        if(number === 0){
            return 1;
        }
        return number;
    }
    let fact = number;
    for(let i=number-1; i>=2; i--){
        fact *= i;
    }
    return fact;
} // O(n)

console.log(findFactorialRecusive(4));
console.log(findFactorialIterative(4));