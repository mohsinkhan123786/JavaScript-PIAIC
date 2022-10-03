/**
 * 
 
 No Users: 
 Add an if test to Exercise 28 to make sure the list of users is not empty.

    • If the list is empty, print the message We need to find some users!

    • Remove all of the usernames from your array, and make sure the correct message is printed.

 * 
 */


users = ['admin', 'Mohsin', 'Huzaifa', 'Hassan', 'Ali']
users.length = 0            // This will remove all the elements from an array


if (users.length === 0){
    console.log('We need to register new members first as we donot have any member yet')
} else {
    users.forEach(element => {
        let msg = ''
        if (element === 'admin'){
            msg = `Hello ${element}, would you like to see a status report`
        } else {
            msg = `Hello ${element}, Thanks for getting registered in Web-3.0 Course at PIAIC.`
        }
        console.log(msg)
    });
}