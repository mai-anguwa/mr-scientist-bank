 
 window.onload = function(){
   // var bln = Number(new Date().getMinutes())
   var bln = Math.floor(Math.random()*999)
   var bl = bln*999;
   document.getElementById("bal").value = bl;
setInterval(function data(){
  var amount = Math.floor(Math.random()*9999);
  var sender = Math.random()*9999999;
  var sender = sender.replace(".", "");

var time = new Date();
var time = time.toDateString();
document.getElementById('amount').innerHTML = amount.toLocaleString();
document.getElementById('sender').innerHTML = sender;
document.getElementById('time').innerHTML =  time;
if(amount>10000){
 alert("Sender : " + sender + " Amount : "+ amount);
}
},100);
 }
 function send(){
    var bank = document.getElementById("bankn").value.toUpperCase();
     if(document.getElementById("acn").value.length < 10){
       var notifi = document.getElementById("not");
       notifi.innerHTML = "This Is Not " +bank+ " Account Number, Check !"
       notifi.style.display = "block";
      setTimeout(function(){notifi.style.display = "none";},5000) 
     }else{
      var balan = Number(document.getElementById("bal").value);
      var amount = document.getElementById("amount").value;
      localStorage.setItem("amount",amount)
      localStorage.setItem("bln",balan)
      var pinc = "<div class='pind'><input type='number' class='k' id='pine' placeholder='ENTER PIN'><button class='send' onclick='check()'>Send</button></div>"
      document.getElementById("render").innerHTML = pinc;
     }
 }
 function check(){
   var notif = document.getElementById("not"); 
  if(!document.getElementById("pine").value.length < 4){
  var amount = Number(localStorage.amount);
  var balan = Number(localStorage.bln);
  var nml = balan - amount;
  document.getElementById("bal").value = nml.toLocaleString();
  document.getElementById("render").innerHTML = ""
 setTimeout(function(){
   notif.innerHTML ="Transfered Successfully!";
   notif.style.display = "block"
   notif.style.display = "block";
    setTimeout(function(){notif.style.display = "none";},5000);
  },2000);
  }else{
    notif.innerHTML = "Incorrect Pin!";
    notif.style.display = "block";
    setTimeout(function(){notif.style.display = "none";},5000); 
  }
 }
function close(){
  document.getElementById("render").innerHTML = " "
  console.log("closed")
}
