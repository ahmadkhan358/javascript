let calculations = 0;
let calculationsMaster = 0;
let calculationsMaster2 = 0;

function fibonacci(n){
    calculations++;
    if(n < 2){
        return n;
    }

    return fibonacci(n-1) + fibonacci(n-2);
}


function fibonacciMaster(){
    let cache = {};
    return function fib(n){
        calculationsMaster++;
        if (n in cache){
            return cache[n];
        }else{
            if(n < 2){
                return n;
            }else{
                cache[n] = fib(n-1) + fib(n-2);
                return cache[n];
            }
        }
    }
}

function fibonacciMaster2(n){
    let fibo = [0, 1];
    let temp ;
    for(let i=2; i<=n; i++){
        calculationsMaster2++;
        temp = fibo[0] + fibo[1];
        fibo[0] = fibo[1];
        fibo[1] = temp;
    }
    return fibo.pop();
}

const n = 8;

const fasterFib = fibonacciMaster();
console.log('DP' , fasterFib(n));
console.log(calculationsMaster);

console.log('DP2', fibonacciMaster2(n));
console.log(calculationsMaster2);

// console.log('FIB', fibonacci(n));
// console.log(calculations);