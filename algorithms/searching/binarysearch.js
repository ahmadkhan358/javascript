const values = [ 0, 1, 2, 3, 3, 4, 6, 9, 11, 22, 40, 78, 78, 941 ];

function binarysearch(input, numbertofind){
    let left = 0;
    let right = input.length-1;

    while(true){

        let mid = Math.floor((left + right) / 2);
        console.log(mid);
        if(numbertofind === input[mid]){
            return true;
        }else if(numbertofind > input[mid]){
            left = mid + 1;
        }else{
            right = mid -1;
        }
    }

    return false;
}

console.log(binarysearch(values, 2));