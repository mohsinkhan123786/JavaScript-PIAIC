/**
 * 
 Large Shirts: 
 Modify the make_shirt() function so that shirts are large by default with a message that reads I love JavaScript. 
 Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
 * 
 */

 function make_shirt(size, msg = 'hum koi ghulam hain ke jo aap khain kr lain?\n\t\t\tAbsolutely not.') {
    console.log(`You ordered a T-Shirt of "${size}" size and the message you want to print is \n\t"${msg.toUpperCase()}"`)
 }

 make_shirt('Medium')
 make_shirt('Large')
