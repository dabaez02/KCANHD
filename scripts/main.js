let changeClass = document.getElementById('resizableColumn');
let amountDonate = document.getElementsByClassName('text_amountdonation')[0];
let totalAmount = document.getElementById('amountTotal');
// DONATIONS.HTML RIGHT HANDED INFO COLUMN
function resizeClass(){changeClass.className = (changeClass.className == "donationsinfocolumn") ? "donationsinfocolumnextended" : "donationsinfocolumn"}
// DONATIONS.HTML LEFT HANDED INPUT COLUMN
function donationsValue(donation){console.log(donation);amountDonate.value=donation;totalAmount.innerHTML=donation;}
