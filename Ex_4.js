/**
 * 
 Famous Quote: 
 Find a quote from a famous person you admire. Print the quote and 
 the name of its author. Your output should look something like the following, 
 including the quotation marks:

 Albert Einstein once said, “A person who never made a mistake never tried anything new.”
 * 
 */

var person = 'Mohsin';
var saying = "Only the weak people quit, brave ones always fight back.";

function quote(){
    return person + ' once said, "' + saying + '"' 
}

console.log(quote())