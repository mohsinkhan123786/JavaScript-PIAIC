/**
 * 

 Great Magicians: 
 Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of 
 magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has 
 actually been modified.

 * 
 */


 magicians = ['Rick Jay', 'Dante', 'Michael Ammar']
 
 make_great = (arr) => {
    arr.forEach(mag => {
        magicians[magicians.indexOf(mag)] = 'The great, ' + mag
    });
    console.log(magicians)
 }
 make_great(magicians)

 show_magicians = (arr) => {
    arr.forEach(magician => {
        console.log(magician)
    });
 }

 show_magicians(magicians)