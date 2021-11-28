const phrase = prompt('Enter a String:'));
var noSpacePhrase = phrase.split(" ").join("");
var reversePhrase = noSpacePhrase.split('').reverse().join('');
if(removeChar === checkPalindrome){
  console.log("The phrase: " + phrase +  " is a palindrome" );
}else {
  console.log("The phrase: " + phrase +  " is not a palindrome" );
};
