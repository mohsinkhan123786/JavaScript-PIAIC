/**
 * 
 
 Sandwiches: 
 Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter 
 that collects as many items as the function call provides, and it should print a summary of the sandwich that is 
 being ordered. Call the function three times, using a different number of arguments each time.

 * 
 */

// We can pass an arbitrary no of args using rest parameter
toppings = (...topps) => {
    for (let topp of topps){
        console.log(`You ordered a sandwich with following topping/s \t-----\t\t ${topp.toUpperCase()}`)
    }
}

toppings('cheese', 'Jelapino', 'Pepperica', 'Meatlof', 'Chicken')