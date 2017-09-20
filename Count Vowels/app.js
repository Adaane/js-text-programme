var input = document.querySelector('input');

input.addEventListener('change', function(event){
  var result       = document.querySelector('p .count');
  result.innerHTML = vowelsCount(event.target.value);
});


function vowelsCount(word) {
  var tab   = word.split('');
  var count = 0;
  for (var i = 0; i < tab.length; i++) {
    tab[i] === "a" || "e" || "i" || "o" || "u" || "y" ? count += 1 : count = count;
  }
  return count;
}
