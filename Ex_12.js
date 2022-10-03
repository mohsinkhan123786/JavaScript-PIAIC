/**
 * 
 Greetings: Start with the array you used in Exercise 11, but instead of just 
 printing each person’s name, print a message to them. The text of each message 
 should be the same, but each message should be personalized with the person’s 
 name.
 * 
 */

 let names = ['Abubaker', 'Umer', 'Usman', 'Ali'];
 
 for (let x of names) {
    let msg = `Welcome "Mr. ${x.toUpperCase()}!" to Web 3.0 & Metaverse Course organized by PIAIC.`
    console.log(msg);
  }