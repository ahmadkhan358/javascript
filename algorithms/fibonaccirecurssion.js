function fibonacciIterative(n){
   if(n <= 1){
       return n;
   }
   let num = 0;
   let numplusone = 1;
   let fib = 0;
   for(let i=2; i<=n; i++){
       fib = num + numplusone;
       num = numplusone;
       numplusone = fib;
   }

   return fib;
}

function fibonacciRecurssive(n){
    if(n <= 1){
        return n;
    }

    return fibonacciRecurssive(n-1) + fibonacciRecurssive(n-2);
}

console.log(fibonacciIterative(10));
console.log(fibonacciRecurssive(10));