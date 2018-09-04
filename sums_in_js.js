// Write three functions in JAVASCRIPT named combiner, summer and multiplier.
// The summer function accepts two integer arguments that are summed together and returned from the function.
// The multiplier function accepts two integer arguments that are multiplied together and returned from the function.
// The combiner function accepts two integer arguments.
// These two arguments should be summed together (using summer)
// These two arguments should be multiplied together (using multiplier)
// The result of both of these operations should be returned in an array where the first element is the result of the summer function and the second element is the result of multiplier function.
// Bonus (if you have time)
// Do it in Ruby



const summer = (x, y)  => { return x + y };
const multiplier = (x, y)  => { return x * y };
const combiner = (x, y)  => { 
    combined = [];
    combined.push(summer(x, y));
    combined.push(multiplier(x,y));
    return combined
 }

summer(2, 3);

// Write a function in javascript called zip, that accepts two arguments array1 and array2, both of which you can assume are arrays. The function should return an array where the first element of array1 and the first element of array2 are combined into one array of length two and that would be the first element of the return array, the second element of array1 and the second element of array2 are combined into one array of length two and that would be the second element of the return array, etc.
// var a = [1, 2, 3]
// var b = ['a', 'b', 'c']

// var c = a.map(function(e, i) {
//   return [e, b[i]];
// });

// console.log(c)


// var a = [1, 2, 3],
//     b = ['a', 'b', 'c', 'd'];

// var c = [];

// for (var i = 0; i < a.length; i++){
//    c.push([a[i], b[i]]);
// }




// const zip = (arr1, arr2) => {
//   var c = [];
//   for (var i = 0; i < a.length; i++){
//    c.push([arr1[i], arr2[i]]);
// }
// console.log(c);
// }


// zip(["a", "b", "c", "d", "e"], [1,2,3,4]) 
// [["a", 1], ["b", 2], ["c", 3], ["d", 4], ["e", null]]

// zip(["z", "i", "p"], ["d", "r", "i", "v", "e"])
 // [["z", "d"], ["i", "r"], ["p", "i"]]

 const compare = (numbers, value) => {
    let a = [];
    let b = [];
    let c = [];
    for (var i = 0; i < numbers.length; i++){
      if (i < value){
     a.push(numbers[i])};
      else if (i = value){
      b.push(numbers[i])};
      else if (i > value){
      c.push(numbers[i])};
  }
  console.log(a)
}
  compare([10, -30, -45, 4, 21, -30], -30) 
  // [[-45], [-30, -30], [10, 4, 21]]