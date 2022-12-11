
  function isPalindrome(word) {
  
    const reversedWord = reverseString(word);
    
    if (word === reversedWord) {
      return true;
    } else {
      return false;
    }
  }

  function reverseString(word) {
    const wordArray = word.split("");
    const reversedWordArray = wordArray.reverse();
    const reversedWord = reversedWordArray.join("");
    return reversedWord;
  }



if (require.main === module) {
 
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("anana"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("abel"));


}

module.exports = isPalindrome;
