/**
 * 
 Your Own Array: 
 Think of your favorite mode of transportation, such as a motorcycle or a car, 
 and make a list that stores several examples. Use your list to print a series 
 of statements about these items, such as “I would like to own a Honda motorcycle.”cls
 
 * 
 */

 let fav_transport = ['Horses', 'BMW-i8', 'Toyota Rivo', 'Mitsubish Pajero', 'Bentley Bentayga', 'Rolls-Royce ghost', 'Bentley Continental GT']
 for (let x of fav_transport) {
    let msg = `I would like to own a "${x.toUpperCase()}!" and Insh'Allah Allah will bkess me with this real soon.`
    console.log(msg);
  }