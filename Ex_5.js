/**
 * 
 *Famous Quote 2: 
 Repeat Exercise 4, but this time store the famous person’s name in a variable 
 called famous_person. 
 Then compose your message and store it in a new variable called message. 
 Print your message.
 * 
 */



var famous_person = 'Mohsin';
var message = "Only the weak people quit, brave ones always fight back.";

function quote(){
    return famous_person + ' once said, "' + message + '"' 
}

console.log(quote())