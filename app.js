$(document).ready(() => {
    const $checkBox = $(".checkbox");
    $checkBox.click( "click", function(){
      $(this).parent().css("textDecoration", "line-through");
    }, function() {
      $(this).parent().css("textDecoration", "none");
    })
  
  });

