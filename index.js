function hasTargetSum(array, target) {
  // Write your algorithm here
  // Iterating through the loop by comparing the index number with all the items in the array,
  // ... to confirm if the adds up to the target. If index at [0] fails to find the total sum number, i move to index [1] and compare 
  // with all the items in the array and so on untill its done

  for (var i = 0; i< array.length; i++){
    for (var j = i+1; j < array.length; j++){
      if (array[i] + array[j] === target){
        return true
      };
       
    }
  }
  return false
}


/* 
  Write the Big O time complexity of your function here
  O(N^2)
*/

/* 
  Add your pseudocode here
  Loop through the array starting with the index[0] comaring with each item in the array list
  if if finds an add sum Number that makes it sum to the rarget;
  return true
  else keep looping with the second item;
*/

/*
  Add written explanation of your solution here
  Iterating through the loop by comparing the index number with all the items in the array,
  ... to confirm if the adds up to the target. If index at [0] fails to find the total sum number, i move to index [1] and compare 
  with all the items in the array and so on untill its done
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("");
  // Negative numbers?
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([-7, 10, 4, 8], 3));

  console.log("");
  // Multiple pairs?
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([1, 2, 3, 4], 5));
}

module.exports = hasTargetSum;
