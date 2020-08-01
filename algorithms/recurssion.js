let counter = 0;
function inception(){
    if(counter > 3){
        console.log(counter);
        return;
    }

    counter++;
    inception();
}

inception();