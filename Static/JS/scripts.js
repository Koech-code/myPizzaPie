function add(){
  var a,b,c;
  a=parseFloat(document.getElementById("first").value);
  b=parseFloat(document.getElementById("second").value);
  c= a + b;
  document.getElementById("answer").value= a + b;
}