let array = [9,3,6,1,3,0,4,2,78,22,11, 941, 40, 60];

function selectionsort(input){
    let temp;
    let length = input.length;
    let smallest;
    for(let i=0; i<length; i++){
        temp = input[i];
        smallest = i;
        for(let j=i+1; j<length; j++){
            if(input[j] < input[smallest]){
                smallest = j;
            }
        }
        input[i] = input[smallest];
        input[smallest] = temp;
    }
    return input;
}

console.log(selectionsort(array));
