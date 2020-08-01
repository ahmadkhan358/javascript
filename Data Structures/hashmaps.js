let user = {
    age: 54,
    name: "Kylie",
    magic: true,
    scream: function(){
        console.log("ahhhhhh!");
    }
};


console.log(user.age);
user.spell = "Avada Kedavra";

console.log(user.scream());