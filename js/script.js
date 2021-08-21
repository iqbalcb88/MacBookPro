function extraCost(partsName) {
  const extraPartsCostText = document.getElementById(partsName + '-cost');
  extraPartsCost = parseInt(extraPartsCostText.innerText);
  return extraPartsCost;
}
function subTotal() {
  const memoryCost = extraCost('memory');
  const storageCost = extraCost('storage');
  const deliveryCost = extraCost('delivery');
  const primaryCost = extraCost('primary');
  const subTotalValue = memoryCost + storageCost + deliveryCost + primaryCost;
  return subTotalValue;

  // console.log(subTotalValue);
}
function setExtraCost(productName, value) {
  document.getElementById(productName + '-cost').innerText = value;
}

document
  .getElementById('extra-facilities')
  .addEventListener('click', function (e) {
    switch (e.target.name) {
      case 'memory-8gb':
        setExtraCost('memory', 0);
        break;
      case 'memory-16gb':
        setExtraCost('memory', 180);
        break;
      case 'ssd-256gb':
        setExtraCost('storage', 0);
        break;
      case 'ssd-512gb':
        setExtraCost('storage', 100);
        break;
      case 'ssd-1tb':
        setExtraCost('storage', 180);
        break;
      case 'free-system':
        setExtraCost('delivery', 0);
        break;
      case 'paid-system':
        setExtraCost('delivery', 20);
        break;
      default:
        console.log('Test');
    }
    document.getElementById('total-cost').innerText = subTotal();
    document.getElementById('total-price').innerText = subTotal();
  });

function verifyPromo() {
  const promoCode = document.getElementById('promo-code').value;

  if (promoCode.toLowerCase() == 'stevekaku') {
    document.getElementById('total-cost').innerText =
      subTotal() - (subTotal() * 20) / 100;
    document.getElementById('total-price').innerText =
      subTotal() - (subTotal() * 20) / 100;
  }
}
