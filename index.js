function isPalindrome(word) {
  // Write your algorithm here
  var newStr = ""
  for (var i = word.length-1; i>=0; i--){
    newStr += word[i]
  }
  if(newStr === word){
    return true
  }else{
    return false
  }
}

/* 
  Add your pseudocode here
  create empty newStr
  iterate over the work
    store newStr
  if newStr === word
    return true
  else 
    return false

*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("mom"));
}

module.exports = isPalindrome;
