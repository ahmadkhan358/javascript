function reverse(str){
    if(!str || str.length<2 || typeof(str) !== 'string'){
        return "only input strings";
    }
    let strArray = str.split('');
    let reversedStr = "";
    for(let i=str.length-1; i>=0; i--){
        reversedStr += strArray[i];
    }
    return reversedStr;
}

function reverse2(str){
    if(!str || str.length<2 || typeof(str) !== 'string'){
        return "only input strings";
    }
    return str.split('').reverse().join('');
}

const reverse3 = str =>str.split('').reverse().join('');

console.log(reverse3("My name is ahmad khan"));