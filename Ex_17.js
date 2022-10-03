/**
 * 
 
 * 
 */


 guests = ['Zia Ullah Khan', 'Steve Jobs']
 guest_dropped = 'Steve Jobs'
 added_guests = ['Dr. Ash', 'Dr. Sameer', 'Dr. Ayesha Saleem']
 new_table = false
 
 
 added_guests.forEach(element => {
     guests.push(element)
    });
    
 length = guests.length
 console.log(length)
 guests.forEach(element => {
     if (element === guest_dropped){
         let indx = guests.indexOf(guest_dropped)
         guests[indx] = 'Elon Musk'
         console.log(guests, '\n')
         } 
     });

guests.forEach(element => {
    if (new_table === false && length > 2){
        guests.pop();
        length = length - 1;
    }
});
      
     for (let x of guests) {
         let msg = `I would like to invite "${x.toUpperCase()}" on dinner.`
             console.log(msg);
     }
     console.log(guests)
     console.log(`\nThe guest who cannot make to the dinner is "${guest_dropped.toUpperCase()}"`)