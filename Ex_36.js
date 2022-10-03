/**
 * 
 T-Shirt: 
 Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the 
 shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. 
 Call the function.
 * 
 */

 function make_shirt(size, msg) {
    console.log(`You ordered a T-Shirt of "${size}" size and the message you want to print is \n\t"${msg.toUpperCase()}"`)
 }

 make_shirt('Medium', 'Weak people quit, Brave ones fight back')
 make_shirt('Large', 'Winning or Loosing are part of the game.\n\t\tQuitting is a shame.')
