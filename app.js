var initialPrice = document.querySelector("#initialPrice");
var stocksQuantity = document.querySelector("#stocksQuantity");
var finalPrice = document.querySelector("#currentPrice");

var submitBtn = document.querySelector("#submitBtn");
var output = document.querySelector("#output");

submitBtn.addEventListener("click", submitHandler);

function submitHandler() {
  var ip = Number(initialPrice.value);
  var qty = Number(stocksQuantity.value);
  var curr = Number(finalPrice.value);

  calculateProfitAndLoss(ip, qty, curr);
}

function calculateProfitAndLoss(initial, quantity, current) {
  if (initial > current) {
    var loss = ((initial - current) * quantity).toFixed(2);
    var lossPercentage = ((loss / initial) * 100).toFixed(2);

    showOutput(`The loss is ${loss} and percent is ${lossPercentage}%`);
  } else if (initial < current) {
    var profit = ((current - initial) * quantity).toFixed(2);
    var profitPercentage = ((profit / initial) * 100).toFixed(2);

    showOutput(`The profit is ${profit} and percent is ${profitPercentage}%`);
  } else {
    showOutput("No pain, No gain");
  }
}

function showOutput(message) {
  output.innerHTML = message;
}
