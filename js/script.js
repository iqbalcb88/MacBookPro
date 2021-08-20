function extraCost(partsName) {
  const extraPartsCostText = document.getElementById(partsName + '-cost');
  extraPartsCost = parseInt(extraPartsCostText.innerText);
  return extraPartsCost;
}
/**
console.log(extraCost('memory'));
console.log(extraCost('storage'));
console.log(extraCost('delivery'));
console.log(extraCost('primary'));
console.log(subtotal());
 */

function subTotal() {
  const memoryCost = extraCost('memory');
  const storageCost = extraCost('storage');
  const deliveryCost = extraCost('delivery');
  const primaryCost = extraCost('primary');
  const subTotal = memoryCost + storageCost + deliveryCost + primaryCost;
  document.getElementById('total-cost').innerText = subTotal;
}

function setExtraCost(productName, value) {
  document.getElementById(productName + '-cost').innerText = value;
}

document.getElementById('memory-16gb').addEventListener('click', function () {
  setExtraCost('memory', 180);
});
