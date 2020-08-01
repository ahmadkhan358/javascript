var beasts = ['Centaur', 'Godzilla', 'Mosura', 'Minotaur', 'Hydra', 'Nessie'];

var found = "";

found = beasts.indexOf('Godzilla');

console.log(found);

found = beasts.findIndex(function(item){
    return item === 'Godzilla';
});

console.log(found);

found = beasts.find(function(item){
    return item === 'Godzilla';
});

console.log(found);

found = beasts.includes('Godzilla');

console.log(found);