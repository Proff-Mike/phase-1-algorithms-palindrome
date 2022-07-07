function isPalindrome(word) {
  // Write your algorithm here
  // loop through half of the string
  // And check if the first half and last half of the string
  // are same as a string of palindrome

  const len = word.length;

  for (let i = 0; i < len /2; i++)  {
    if (word[i] !== word[len - 1 - i])  {
      return false;
    }
  }
  return true;
}

/* 
  Add your pseudocode here

  loop through half of the string
  if letters of first half of the string = last half of the string
    then return true
  if not
    then return false
*/

/*
  Add written explanation of your solution here

  When a string argument is passed into the function, first, it 
  would loop through the string and check if the first half of 
  the string is same as the second half that begins with same letter.
  If it happens to be so, then the string is a palindrome, if not
  then it is not a palindrome. 
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("mom"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("son"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
