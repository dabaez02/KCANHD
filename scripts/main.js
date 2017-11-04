let changeClass = document.getElementById('resizableColumn');
let amountDonate = document.getElementsByClassName('text_amountdonation')[0];
let totalAmount = document.getElementById('amountTotal');
function resizeClass(){changeClass.className = (changeClass.className == "donationsinfocolumn") ? "donationsinfocolumnextended" : "donationsinfocolumn"}
function donationsValue(donation){
  console.log(donation);
  amountDonate.value=donation;
  totalAmount.innerHTML=donation; 
}
