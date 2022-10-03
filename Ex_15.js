/**
 * 
 Changing Guest List: You just heard that one of your guests can’t make the dinner, so you 
 need to send out a new set of invitations. You’ll have to think of someone else to invite.

 • Start with your program from Exercise 14. Add a print statement at the end of your 
   program stating the name of the guest who can’t make it.
 • Modify your list, replacing the name of the guest who can’t make it with the name of 
   the new person you are inviting.
 • Print a second set of invitation messages, one for each person who is still in your list.
 
 * 
 */

 guests = ['Zia Ullah Khan', 'Steve Jobs']
 guest_dropped = 'Steve Jobs'

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