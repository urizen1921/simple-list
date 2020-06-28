$(document).ready(function() {

  $('#button').click(function() {

    var input = $('#input').val();

    if(input === "") {
      $('#alert').html('<p style="color: red;">Please provide the valid input</p>');

    } else {
 
      if(($('ul#list li').length + 1) % 3 === 0) {
        $('#list').append($('<li key="' + input + '">' + input + '</li>').css('color', 'red'));

      } else {
        $('#list').append($('<li key="' + input + '">' + input + '</li>').css('color', 'black'));

      }

      $('#input').val('');
      
    }
    console.log($('ul#list li').length);
  })
  
});