/**
 * 
 Magicians: 
 Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of 
 each magician in the array.
 * 
 */

 magicians = ['Rick Jay', 'Dante', 'Michael Ammar']

 show_magicians = (arr) => {
    arr.forEach(magician => {
        console.log(magician)
    });
 }

 show_magicians(magicians)