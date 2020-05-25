function Order (type, size, crust, topping) {
    this.type = type;
    this.size = size;
    this.crust = crust;
    this.topping = topping;
  }
  
  Order.prototype.fullOrder = function () {
    return this.type + " with the crust of " + this.crust + " and " + this.topping + " as topping.";
  };
  
  function Total(price, quantity, delivery) {
    this.price = price;
    this.quantity = quantity;
    this.delivery = delivery;
  }
  
  Total.prototype.finalTotal = function () {
    return this.price * this.quantity + this.delivery;
  };
  
  var sizePrice = [1500, 1000, 700]
  var deliverPrices = [0, 200];

  $(document).ready(function () {
    $('form#my-Form').submit(function (event) {
        event.preventDefault();
        var pizzaType = $("#type").val();
  
        var pizzaSize = parseInt($('#size').val());
        var pizzaCrust = $("#crust-type").val();
  
        var pizzaTop = $("#topping").val();
  
        var pizzaQuantity = parseInt($('#quantity').val());
  
        var pizzaPoint = parseInt($('#point').val());
  
        var price = sizePrice[pizzaSize - 1];
  
        var DeliveryCost = deliverPrices[pizzaPoint - 1];
  
        newOrder = new Order(pizzaType, pizzaSize, pizzaCrust, pizzaTop);
        newTotal = new Total(price, pizzaQuantity, DeliveryCost);
        if (pizzaPoint===1){
        alert("You've ordered: " + newOrder.fullOrder() + ". Continue to see your total bill");
        alert("Your total bill is: " + newTotal.finalTotal());
        }else{
            if(pizzaPoint===2){
                prompt("Please enter delivery location");
                alert("Order recieved. please proceed");
                alert("You've ordered : " + newOrder.fullOrder() + ". Click okay to see total bill");
                alert("Your total bills is : " + newTotal.finalTotal());
            }
        }
    })
      })