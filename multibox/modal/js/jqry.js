
$(".open").on("click", function(){
    $(".popup-overlay, .popup-content").addClass("active");
    $("button").removeClass("pulse");
  });
  
 
  $(".close, .popup-overlay").on("click", function(){
    $(".popup-overlay, .popup-content").removeClass("active");
    $("button").addClass("pulse")
  });
  