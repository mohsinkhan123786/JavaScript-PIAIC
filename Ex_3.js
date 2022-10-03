/**
 Name Cases: Store a person’s name in a variable, and then print that person’s 
 name in lowercase, uppercase, and titlecase.
 
*/

var name1 = 'MoHsIn';

function lower(){
    return name1.toLowerCase()
}

function upper(){
    return name1.toUpperCase()
}

function title(){
    for(var i = 0; i < name1.length; i++){
        name1[i] = name1[i][0].toUpperCase() + name1[i].slice(1);
     }
    return name1
}

console.log(lower());
console.log(upper());
console.log(title());