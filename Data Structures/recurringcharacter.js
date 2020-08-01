function findrecurring(array){
    const arrayofrecurringcharacters = [];
    for(let i=0; i<array.length; i++){
        arrayofrecurringcharacters.push(array[i]);
        console.log(arrayofrecurringcharacters);
        for(let j=0; j<arrayofrecurringcharacters.length; j++){
            if(arrayofrecurringcharacters[j] === array[i+1]){
                return array[j];
            }
        }
    }
    return undefined;
}//O(n^2)


function findrecurring2(array){
    let map = {};
    for(let i=0; i<array.length; i++){
        if(map[array[i]] !== undefined){
            return array[i];
        }else{
            map[array[i]] = i;
        }
        console.log(map);
    }
    return undefined;
}//O(n)

console.log(findrecurring([2,5,1,5]));

console.log(findrecurring2([2,5,1,5]));