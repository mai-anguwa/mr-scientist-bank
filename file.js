$(document).ready(function(){

  $(".transb").click(function(){
  $(".render").html("<div class='data'><div><input type='number' class='k' id='acn' placeholder='ENTER ACCOUNT NUMBER'></div><br><div><input type='text' class='k' id='bankn' placeholder='ENTER BANK NAME'></div><br><div><input type='number' id='amount' class='k' placeholder='ENTER AMOUNT TO TRANSFER'></div><br><div></div><button class='send' onclick='send()'>Send</button></div></button></div>");
});

$(".re").click(function(){
  $(".render").html("<div class='acinfo'><h3>Account Name</h3> Mr Scientist<h3>Account Number</h3> 9999938883</div>")
  setTimeout(function(){$(".acinfo").hide();},6000);
});

});
