function  _hash(key){
    let hash = 0;
    for(let i=0; i<key.length; i++){
        hash = (hash + key.charCodeAt(i) * i)%6;
    }
    return hash;
}

console.log(_hash("grapes"));