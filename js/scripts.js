//Business logic

var pigLatin = function(word) {
  if ($("input#user-input").val() === "a") {
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
