 
  
 window.onload = function(){
   // var bln = Number(new Date().getMinutes())
   var bln = Math.floor(Math.random()*999)
   var bl = bln*999;
   document.getElementById("bal").value = bl.toLocaleString();
  sessionStorage.setItem("bln",bl)
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
      sessionStorage.setItem("amount",amount)
      // here
      var pinc = "<div class='pind'><input type='number' class='k' id='pine' placeholder='ENTER PIN'><button class='send' onclick='check()'>Send</button></div>"
      document.getElementById("render").innerHTML = pinc;
     }
 }
 function check(){
   var notif = document.getElementById("not"); 
  if(!document.getElementById("pine").value.length < 4){
  var amount = Number(sessionStorage.amount);
  var balan = Number(sessionStorage.bln);
  var nml = balan - amount;
  sessionStorage.setItem("bln",nml)
  document.getElementById("bal").value = nml.toLocaleString();

// here goes the change

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






