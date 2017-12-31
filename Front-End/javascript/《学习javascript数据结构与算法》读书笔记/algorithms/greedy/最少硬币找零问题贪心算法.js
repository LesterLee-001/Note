function MinCoinChange(coins) {
  //面额数组，对于美元[1,5,10,25]
  var coins = coins;
  this.makeChange = function(amount) {
    var change = [];
    var total = 0;
    //从最大面额开始，拿尽可能多的最大面额。
    for (var i = coins.length - 1; i >= 0; i--) {
      var coin = coins[i];
      while (total + coin <= amount) {
        change.push(coin);
        total += coin;
      }
    }
    return change;
  };

}
var minCoinChange = new MinCoinChange([1, 5, 10, 25]);
console.log(minCoinChange.makeChange(36));
