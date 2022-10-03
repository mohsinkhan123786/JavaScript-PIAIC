/**
 * 
 More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more 
 comparisons, write more tests. Have at least one True and one False result for each of the following:

    • Tests for equality and inequality with strings

    • Tests using the lower case function

    • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, 
      and less than or equal to

    • Tests using "and" and "or" operators

    • Test whether an item is in a array

    • Test whether an item is not in a array
    
    * 
    */
   
/****************************                   Tests using Strings                      ***************************/

str1 = 'Ali'
str2 = 'Mohsin'

// false
out =  str1 === str2 ? true : false
console.log(out)

// true
out =  str1 !== str2 ? true : false
console.log(out)

// true
out = str1.toLowerCase() !== str1 ? true : false
console.log(out)

// false
out = str1.toLowerCase() === str1 ? true : false
console.log(out)

/****************************                   Tests using Numbers                      ***************************/

num = 20
target = 24

// false
achieved = num > target ? true : false
console.log(achieved)

// true
achieved = num < target ? true : false
console.log(achieved)

// true
achieved = num <= target ? true : false
console.log(achieved)

// false
achieved = num >= target ? true : false
console.log(achieved)

/*********************                   Tests using Conditional Operators                      ********************/

// false
age = 10
eligible = age >= 20 && age <= 40 ? true : false

console.log(eligible)

// true
food = 'Desi'
asian = food === 'Chinese' || food === 'Desi' ? true : false

console.log(asian)


/*********************                   Tests if term is Array or Not?                      ********************/

// true
item = ['Mohsin', 'Huzaifa']
// item = 'Mohsin'
array = typeof(item) === 'object' ? true : false

console.log(array)

item = 123055.22
array = typeof(item) === 'object' ? true : false

console.log(array)