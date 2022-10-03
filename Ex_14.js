/**
 * 
 Guest List: 
 If you could invite anyone, living or deceased, to dinner, who would you invite? 
 Make a list that includes at least three people you’d like to invite to dinner. 
 Then use your list to print a message to each person, inviting them to dinner.
 * 
 */

 guests = ['Muhammad', 'Abubaker', 'Umer', 'Usman', 'Ali', 'Zia Ullah Khan']

 for (let x of guests) {
    let msg = `I would like to invite "${x.toUpperCase()}" on dinner.`
    console.log(msg);
  }