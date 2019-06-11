$(document).ready(function() {
  $("#formUserSentence").submit(function(event) {

    var userSentence = $("#userSentence").val().split('');


    for (var index = 0; index < userSentence.length; index +=1) {
      if (userSentence[index] === 'a' || userSentence[index] === "e"|| userSentence[index] === "i"|| userSentence[index] === "o"|| userSentence[index] === "u") {
        userSentence[index] = "-";
      }  else if (userSentence[index] === "A" || userSentence[index] === "E"|| userSentence[index] === "I"|| userSentence[index] === "O"|| userSentence[index] === "U") {
        userSentence[index] = '-';
      }
    };


      $("#editSentence").append("<p>" + userSentence.join('') + "</p>");
      $("#formUserSentence").hide();






    event.preventDefault();
  });
});
