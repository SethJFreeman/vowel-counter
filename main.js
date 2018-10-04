function countVowels(str) {
  var trim = str.replace(/[^aeiou]/g, ""); // removes everything thats not a value
  $("#output").val(trim.length + " Vowels"); // Outputs the number of vowels
}

$("#submit").on("click", function() { // Calls function when user clicks submit button
  countVowels($("#input").val()); // Calls countVowels function with the input value set as the expression
});
