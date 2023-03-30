const reversingWord = (word) => {
  return word.split("").reverse().join("")
}

function isPalindrome(word) {
  // Write your algorithm here
  let reverseword = reversingWord(word)
  if (word === reverseword){
    return true
  }
  return false
}

/* 
  Add your pseudocode here
 
  create an array from the input string
  reverse the array
  create a string from the reversed array
  return the reversed string

  if the reversed string is the same as the input
    return true
  else
    return false
*/

/*
  Add written explanation of your solution here
  The word would initially be divided up into an array of characters using the algorithm. The characters will then be swapped around and put back together to create a mirrored word. So, if the word is identical to the mirrored word, it will return true; otherwise, this would return false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("mom"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("hi"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
