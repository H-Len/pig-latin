$(function(){
  $("form#pig-latin").submit(function(event){
    event.preventDefault();
    var word = parseString($("input").val());
    var result = pig-latin(word)});


});
