var input  = document.querySelector('input');
var result = document.querySelector('.result');

input.addEventListener('keydown', function(event) {
  event.target.value ? result.innerHTML = isPalindrome(event.target.value) : result.innerHTML = "";
})

function isPalindrome(word) {
  var wordPreview = word;
  var tab     = word.split('');
  var newWord = [];
  var result  = "";

  for (var i = tab.length; i >= 0 ; i--) {
    newWord.push(tab[i]);
  }
  newWord = newWord.join('');
  newWord === wordPreview ? result = " you world is palindrome ! " : result = "you world is not a palindrome. Sorry bro' !";
  return result;
}
