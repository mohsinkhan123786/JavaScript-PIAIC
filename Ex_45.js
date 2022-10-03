/**
 * 
 
 Cars: 
 Write a function that stores information about a car in a Object. The function should always receive a manufacturer 
 and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the 
 required information and two other name-value pairs, such as a color or an optional feature. Print the Object 
 that’s returned to make sure all the information was stored correctly.

 * 
 */

// Need some help with this
// Output I get            >>>             { '0': 'White', '1': 'Auto', make: 'Toyota', model: 2022 }
// Expected Output         >>>             { color: 'White', transmission: 'Auto', make: 'Toyota', model: 2022 }
 
 car = (make, model, ...features) => {
     let details = {
        make : make,
        model : model,
     }
     for (let [key, value] of Object.entries(features)) {
        details[key] = value           // close solution but not perfect.
     }
    return details
 }

 console.log(car('Toyota', 2022, color = 'White', transmission = 'Auto'))
