/**
 * 
 Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction 
 for the results of each test. Your code should look something like this:

------------------------------------------------------------------------------------------------------------------
                            let car = 'subaru';

                            console.log("Is car == 'subaru'? I predict True.")

                            console.log(car == 'subaru')
------------------------------------------------------------------------------------------------------------------

    • Look closely at your results, and make sure you understand why each line evaluates to True or False.

    • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
 * 
 */

// Basically this is conditional statement based on a ternary operator

age = 24
eligibility_check = age >= 20 && age <= 30? true : false;
// Output = true

console.log(`Out-1 = ${eligibility_check}`)

marks = 82
good_grades = marks >= 80 ? true : false;
// Output = true

console.log(`Out-2 = ${good_grades}`)

age = 33
eligibility_check = age >= 20 && age <= 40? true : false;
// Output = true

console.log(`Out-3 = ${eligibility_check}`)

marks = 94
good_grades = marks >= 80 ? true : false;
// Output = true

console.log(`Out-4 = ${good_grades}`)

gfs = 1
committed = gfs < 0 ? false : true;
// Output = true

console.log(`Out-5 = ${committed}`)

income = 20000000
rich = age > 1500000 ? true : false;
// Output = true

console.log(`Out-6 = ${rich}`)

income = 2000
rich = age > 1500000 ? true : false;
// Output = false

console.log(`Out-7 = ${rich}`)

gfs = 2
single = gfs > 0 ? false : true;
// Output = false

console.log(`Out-8 = ${single}`)

new_age = 18
eligible = new_age < 20? false : true;
// Output = false

console.log(`Out-9 = ${eligible}`)

my_age = 16
eligibleORnot = my_age < 20? false : true;
// Output = fasle

console.log(`Out-10 = ${eligibleORnot}`)


eats = 'Fast Food'
ethnicity = eats !== 'Desi Food' ? 'European' : 'Asian'
// In our case it must return "European" as the eats variable has a value "Fast Food" 
// thus the condition on the left of "?" will turn true. When its true the option on the left of ":" will be the 
// output result. When the condition on the left of "?" becomes false the output result is the one on 
// the right of the ":"

console.log(`Out-11 = ${ethnicity}`)

DSAknowledge = 'Yes'
programmer = DSAknowledge === 'No' ? 'Not a Programmer' : 'Programmer'
// In our case it will return 'Programmer' as the value of DSAknowledge is "Yes" and not "No"

console.log(`Out-12 = ${programmer}`)