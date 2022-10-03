/**
 * 
 Intentional Error: 
 If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index
 in one of your programs to produce an index error. Make sure you correct the error before closing the program.
 * 
 */


 error_array = ['Apple', 'Oranges', 'Mango', 'Grapes']

 console.log(error_array[105])
 console.log(error_array[1.5])
 console.log(error_array[-5])
 console.log(error_array[NaN])
 console.log(error_array[undefined])
 console.log(error_array['index'])

 /**
  * 
  * Conclusion
  * 
  * I tried but found in JS it always return undefined as a value and do not return the index error.
  */