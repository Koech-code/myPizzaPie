$(document).ready(function(){
//  alert("Kipkorir wee keringet niaa, lakini kerikilkee eeh!!!")
 $("#small").on("click",function(){
   $("#hide").show();
   $("#hide1").hide();
   $("#hide2").hide();
 });

 $("#medium").on("click",function(){
  $("#hide").hide();
  $("#hide1").show();
  $("#hide2").hide();
});

$("#large").on("click",function(){
  $("#hide").hide();
  $("#hide1").hide();
  $("#hide2").show();
});

$("#checkout").on("click",function(){
  
  $("#report").show();
});

});

function add(){
  var a,b,c;
  a=parseFloat(document.getElementById("first").value);
  b=parseFloat(document.getElementById("second").value);
  c= a + b;
  var blank1=document.getElementById("first").value;
  var blank2=document.getElementById("second").value;
  if (blank1===""){
    alert("Input your pizza price first.");
  }else if (blank2===""){
    alert("Input the prize of your pizza-toppings as well to get the total.");
  }
  else{
  document.getElementById("answer").value= c;
}
}

function delivery(){
  var a=document.getElementById("deliver").value;
  var blank1=document.getElementById("first").value;
  var blank2=document.getElementById("second").value;
  if(blank1===""){
    alert("Input your pizza price first.");
  } else if(blank2===""){
    alert("Input your pizza-toppings price before choosing the delivery option.");
  }
  else if(a==="Yes"){
   var place=prompt("Please enter the preferred location you wish your pizza get delivered");
   alert("Your order will be delivered to "+place+" once you checkout.");
   alert("You will be charged $ 2.00 as delivery fee.Thank you, enjoy every bite.");
 } else if(a==="No"){
   alert("Thank you for placing your order.");
 }
}
