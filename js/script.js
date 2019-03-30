function Order() {
  this.order = [];
}
function PizzaOrder(size, crust, sauce, toppings) {
  this.size = size;
  this.crust = crust;
  this.sauce = sauce;
  this.toppings = toppings;
}
PizzaOrder.prototype.costOrder = function () {
  if (this.toppings.length > 1) {
    return this.size * 1.2 + (this.toppings.length - 1)
  } else {
    return this.size * 1.2;
  }
}
Order.prototype.addToOrder = function (newItem) {
  this.order.push(newItem)
}
$(document).ready(function(){
  // tabs functionality
  $("#help-btn").click(function() {
    $("#help").addClass('active show');
    $("#pizza-form").removeClass('active show');
    $("#side-form").removeClass('active show');
    $("#drink-form").removeClass('active show');
    $("#dessert-form").removeClass('active show');
  });

  $("#pizza-btn").click(function() {
    $("#pizza-form").addClass('active show');
    $("#help-form").removeClass('active show');
    $("#side-form").removeClass('active show');
    $("#drink-form").removeClass('active show');
    $("#dessert-form").removeClass('active show');
  });

  $("#side-btn").click(function() {
    $("#side-form").addClass('active show');
    $("#help-form").removeClass('active show');
    $("#pizza-form").removeClass('active show');
    $("#drink-form").removeClass('active show');
    $("#dessert-form").removeClass('active show');
  });

  $("#drink-btn").click(function() {
    $("#drink-form").addClass('active show');
    $("#help-form").removeClass('active show');
    $("#pizza-form").removeClass('active show');
    $("#side-form").removeClass('active show');
    $("#dessert-form").removeClass('active show');
  });

  $("#dessert-btn").click(function() {
    $("#dessert-form").addClass('active show');
    $("#help-form").removeClass('active show');
    $("#pizza-form").removeClass('active show');
    $("#drink-form").removeClass('active show');
    $("#side-form").removeClass('active show');
  });

  $("#form-pizza").submit(function(event) {
    event.preventDefault();

    var sizeInput = parseInt($("input:radio[name=size]:checked").val());
    var crustInput = $("input:radio[name=crust]:checked").val();
    var sauceInput = $("input:radio[name=sauce]:checked").val();
    var toppingsInput = [];

    $("input:checkbox[name=toppings]:checked").each(function(){
     var toppings = $(this).val();
     toppingsInput.push(toppings);
   });
   var newOrder = new Order();
   var newPizza = new PizzaOrder(sizeInput, crustInput, sauceInput, toppingsInput);
   newOrder.addToOrder(newPizza);
   // Fix to get values only from newPizza or newOrder
   $("span#size").text(newOrder.order[0].size);
   // $("span#size").text(newPizza.size);
   $("span#crust").text(newPizza.crust);
   $("span#sauce").text(newPizza.sauce);
   $("span#toppings").text(newPizza.toppings);
   $("span#cost").text(newPizza.costOrder());
   $("#btn-add").show();
   $("#btn-pizza").hide();
   // need to onClick(resetfields)
   $("#btn-pizza").show();
   window.location = 'Pizza-Order.html#jumpHere';



  });
});
