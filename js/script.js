var sizes = ["small", "medium" , "large"]
$(document).ready(function(){
  var Amount = 0;
  $("#submit").click(function(){
      var checkVal = $("input[name=Yes]:checked").val();
      if (checkVal === "yes"){
          Amount = 1;
          var getLocation = prompt("Let us know your location:");
          alert(" Your pizza will be delivered at " + getLocation + " with additional amount of 1$ for delivery");
      }
  })