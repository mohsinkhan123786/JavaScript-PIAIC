/**
 * 
 Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
    • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.

    • If the alien’s color isn’t green, print a statement that the player just earned 10 points.

    • Write one version of this program that runs the if block and another that runs the else block.
 * 
 */

alienKilled = 'green'       // Will pass if test
alienKilled = 'yellow'       

if(alienKilled === 'green') {
    console.log('Playered earned 5 points')
}
else console.log('Player gained 10 points')


// else if (alienKilled === 'red' || alienKilled === 'yellow') {
//     console.log('Player earned 3 points')
// }