/**
 * 
 Checking Usernames: 
 Do the following to create a program that simulates how websites ensure that everyone has a unique username.

    • Make a list of five or more usernames called current_users.

    • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in 
      the current_users list.

    • Loop through the new_users list to see if each new username has already been used. If it has, print a message 
      that the person will need to enter a new username. If a username has not been used, print a message saying 
      that the username is available.

    • Make sure your comparison is case sensitive. If 'John' has been used, 'JOHN' should not be accepted.

 * 
 */

current_users = ['admin', 'mohsin', 'zainab', 'salar', 'akbar']
new_users = ['Zarrar', 'Asad', 'zainab', 'salar', 'Salar', 'NaAil']

new_users.forEach(element => {
    let msg = '';
    msg =  current_users.includes(element) ? `Sorry ${element} is already taken. Please select a unique user name` : `Welcome ${element}. You successfully registered to Web-3.0 course at PIAIC.`;
    console.log(msg);
});
