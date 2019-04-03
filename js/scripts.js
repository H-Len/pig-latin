//Business logic

var pigLatin = function(word) {
  var userInput = $("input#user-input").val();
//   var inputArrs = ['a', 'e', 'i', 'o', 'u'];
//   // userInput.forEach(function(inputArr) {
//   //   userInput === inputArr;
//     return true;
//   });
// };

  if (userInput === "a" || userInput === "e" || userInput === "i" || userInput === "o" || userInput === "u") {
    return true;
  } else {
    return false;
  };
};


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
