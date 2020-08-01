function getInteger(romanNumber){
    let romansNumerals = {
        i: 1,
        v: 5,
        x: 10,
        l: 50,
        c: 100,
        d: 500,
        m: 1000
    };
    romanNumber = romanNumber.toLowerCase();
    let integer = 0;
    for(let i=0; i<romanNumber.length; i++){
        if(romanNumber.charAt(i) === "i" && romanNumber.charAt(i+1) === "v"){
                integer += 4;
        }else{
            integer += romansNumerals[romanNumber.charAt(i)];
        }
    }
    return integer;
}

console.log(getInteger("xiv"));