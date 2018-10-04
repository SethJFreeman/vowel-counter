function countVowels(str) {
  var trim = str.replace(/[aeiou]/g, "");
  $("#output").val(trim);
}

$("#submit").on("click", function() {
  countVowels($("#input").val());
});
