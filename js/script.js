//this function will pick any element value by id
function extraCost(partsName) {
  const extraPartsCostText = document.getElementById(partsName + '-cost');
  extraPartsCost = parseInt(extraPartsCostText.innerText);
  return extraPartsCost;
}
//declare and call above function with parameter and find out the sub total
function subTotal() {
  const memoryCost = extraCost('memory');
  const storageCost = extraCost('storage');
  const deliveryCost = extraCost('delivery');
  const primaryCost = extraCost('primary');
  const subTotalValue = memoryCost + storageCost + deliveryCost + primaryCost;
  return subTotalValue;

  // console.log(subTotalValue);
}

//we called this function on switch case
function setExtraCost(productName, value) {
  document.getElementById(productName + '-cost').innerText = value;
}
/* event delegation applied also added name attribute to HTML
   switch case statement used to find the target event 
*/

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

//to verify code we added a onclick function in HTML and defined here
function verifyPromo() {
  const promoCode = document.getElementById('promo-code');
  promoCodeValue = promoCode.value;

  if (promoCodeValue.toLowerCase() == 'stevekaku') {
    document.getElementById('total-cost').innerText =
      subTotal() - (subTotal() * 20) / 100;
    document.getElementById('total-price').innerText =
      subTotal() - (subTotal() * 20) / 100;
    promoCode.style.color = 'green';
    promoCode.disabled = true;
  } else {
    promoCode.style.color = 'red';
  }
}
