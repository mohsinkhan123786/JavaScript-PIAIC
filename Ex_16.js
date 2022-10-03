/**
 * 
 More Guests: You just found a bigger dinner table, so now more space is available. 
 Think of three more guests to invite to dinner.

• Start with your program from Exercise 15. Add a print statement to the end of your 
  program informing people that you found a bigger dinner table.
• Add one new guest to the beginning of your array.
• Add one new guest to the middle of your array. • Use append() to add one new guest to the 
  end of your list. • Print a new set of invitation messages, one for each person in your 
  list.

 * 
 */

guests = ['Zia Ullah Khan', 'Steve Jobs']
guest_dropped = 'Steve Jobs'
added_guests = ['Dr. Ash', 'Dr. Sameer', 'Dr. Ayesha Saleem']

added_guests.forEach(element => {
    guests.push(element)
});
 
guests.forEach(element => {
    if (element === guest_dropped){
        let indx = guests.indexOf(guest_dropped)
        guests[indx] = 'Elon Musk'
        console.log(guests, '\n')
        } 
    });
 
    for (let x of guests) {
        let msg = `I would like to invite "${x.toUpperCase()}" on dinner.`
            console.log(msg);
    }
    console.log(`\nThe guest who cannot make to the dinner is "${guest_dropped.toUpperCase()}"`)