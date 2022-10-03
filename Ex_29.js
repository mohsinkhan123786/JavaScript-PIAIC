/**
 * 
 Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that 
 check for certain fruits in your array.
    • Make a array of your three favorite fruits and call it favorite_fruits.

    • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is 
    in your array, the if block should print a statement, such as You really like bananas!
 * 
 */

const favorite_fruits = ['Oranges', 'Grapes', 'Mangoes', 'Dates', 'Hazel Nuts']


if ( !'Mangoes' in favorite_fruits) {
    console.log('Wait a min, Who are you?');
} else {};


if (favorite_fruits.length >= 3) {
    if (favorite_fruits.includes('Oranges')) {
        if (favorite_fruits.includes('Mangoes')){
            if (favorite_fruits.includes('Hazel Nuts')){
                if(!favorite_fruits.includes('Cabbage')){
                    console.log('You like fruits and dry fruits. But, you need to include vegitables too in your dite')
                }
            }
        }
    }
}