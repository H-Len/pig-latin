//Business logic

var pigLatin = function(word) {
  var userInput = $("input#user-input").val();
  var inputArr = ['a', 'e', 'i', 'o', 'u'];
  var vowelTest = inputArr.indexOf(userInput);
console.log(userInput.slice(0));

  if (vowelTest >= 0) {
    return userInput + "way";
  } else if (inputArr.indexOf(0) <= userInput.slice(0, 0)) {
    return userInput + "way";
  } else {
    return false
  };
 };



//   // userInput.forEach(function(inputArr) {
//   //   userInput === inputArr;
//     return true;
//   });
// };
  //
  // if (userInput === "a" || userInput === "e" || userInput === "i" || userInput === "o" || userInput === "u") {
  //   //var pLatin = ;
  //   // return userInput + "way";
  // } else {
  //   return false;
  //var vowels = ['a', 'e', 'i', 'o', 'u'];



//UI logic
$(function(){
  $("form#pig-latin").submit(function(event){
    event.preventDefault();
    var word = parseInt($("input#user-input").val());
    var result = pigLatin(word);
    $("#result").text(result);

    // console.log(event);
  });
});
