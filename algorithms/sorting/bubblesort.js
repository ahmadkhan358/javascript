let array = [9,3,6,1,3,0,4,2,78,22,11, 941, 40, 60];

function bubbleSort(input){
    let temp;
    let length = array.length;
    for(let i=0; i<length; i++){
        for(let j=0; j<length-i; j++){
            if(input[j] > input[j+1]){
                temp = input[j];
                input[j] = input[j+1];
                input[j+1] = temp;
            }
        }
    }
    return input;
}

console.log(bubbleSort(array));

