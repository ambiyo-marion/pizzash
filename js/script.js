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
  $("#submit").click(function(event){
    var Size = parseFloat(document.getElementById('size').value);
    var Crust = parseFloat(document.getElementById('crust').value);
    var Topping = parseFloat(document.getElementById('toppings').value);
    var Quantity = parseFloat(document.getElementById('num').value);
    var total = (Size + Crust + Topping + Quantity + Amount);
  
    