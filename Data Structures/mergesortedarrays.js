
function mergeSortedArrays(arr1, arr2){
    if(arr1.length === 0){
        return arr2;
    }

    if(arr2.length === 0){
        return arr1
    }
    var mergedArray = arr1.concat(arr2);
    var temp = 0;
    for(let i=0; i<mergedArray.length-1; i++){
        if(mergedArray[i] > mergedArray[i+1]){
            temp = mergedArray[i];
            mergedArray[i] = mergedArray[i+1];
            mergedArray[i+1] = temp;
        }
    }
    return mergedArray;
}

function mergeSortedArrays2(arr1, arr2){
    const mergedArray = [];
    let array1Item = arr1[0];
    let array2Item = arr2[0];
    let i = 1; 
    let j = 1;
    if(arr1.length === 0){
        return arr2;
    }

    if(arr2.length === 0){
        return arr1
    }

    while(array1Item || array2Item){
        console.log(array1Item, array2Item);
        if(!array2Item || array1Item < array2Item){
            mergedArray.push(array1Item);
            array1Item = arr1[i];
            i++;
        }else{
            mergedArray.push(array2Item);
            array2Item = arr2[j];
            j++;
        }
    }

    return mergedArray;
}

console.log(mergeSortedArrays2([0,3,4], [4, 6, 30, 56]));