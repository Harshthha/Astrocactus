let cartcount= 0;

    function increment() {
      cartcount++;
      document.getElementById("cartcount").textContent = cartcount;
    }

const prices = {
    1: 12,
    2: 21,
    3: 24,
    4: 31,
    5: 24,
    6: 10,
    7: 0,
    8: 21,
    9: 9,
    10: 15,
    11: 27,
    12: 14
};

const frequencies = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
    9: 0,
    10: 0,
    11: 0,
    12: 0
};

let total = 0;
function freq(productId) {
    frequencies[productId]++;
    document.getElementById('frequency' + productId).textContent = frequencies[productId];

    total += prices[productId];
    document.getElementById('total').textContent = total;
  }

  function proceedtopayment() {
    alert('Proceed to payment options');
  }