let array = [9,3,6,1,3,0,4,2,78,22,11, 941, 40, 60];

function insertionsort(input){
    let key, j;
    let length = input.length;
    for(let i=1; i<length; i++){
        key = input[i];
        j = i-1;
        while(j >= 0 && input[j] > key){
            input[j+1] = input[j];
            j -= 1;
            console.log(input);
            console.log(key);
            console.log(input[j]);
        }
        input[j+1] = key;
    }
    // return input;
}

// console.log(insertionsort(array)
insertionsort(array);

