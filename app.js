var initialPrice = document.querySelector("#initialPrice");
var stocksQuantity = document.querySelector("#stocksQuantity");
var finalPrice = document.querySelector("#finalPrice");

var submitBtn = document.querySelector("#submitBtn");
var output = document.querySelector("#output");

function calculateProfitAndLoss(initial, quantity, current) {
  if (initial > current) {
    var loss = (initial - current) * quantity;
    var lossPercentage = (loss / initial) * 100;

    console.log(`The loss is ${loss} and percent is ${lossPercentage}%`);
  } else if (initial < current) {
    var profit = (current - initial) * quantity;
    var profitPercentage = (profit / initial) * 100;

    console.log(`The profit is ${profit} and percent is ${profitPercentage}%`);
  } else {
    console.log("No pain, No gain");
  }
}
