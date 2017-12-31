function MinCoinChange(coins) {
  //面额数组，对于美元[1,5,10,25]
  var coins = coins;
  var cache = {};

  this.makeChange = function(amount) {
    var me = this;
    //如果amount<0,返回空数组
    if (!amount) {
      return [];
    }
    //如果结果已经缓存，直接返回结果
    if (cache[amount]) {
      return cache[amount];
    }

    var min = [];
    var newMin;
    var newAmount;
    //对于每种面额
    for (var i = 0; i < coins.length; i++) {
      var coin = coins[i];
      //计算总值不断变小
      newAmount = amount - coin;
      //总值为清零，继续
      if (newAmount >= 0) {
        newMin = me.makeChange(newAmount);
      }
      // 总值是否有效 最小组合长度小于原来的长度，
      if (newAmount >= 0 && (newMin.length < min.length - 1 || !min.length) && (newMin.length || !newAmount)) {
        min = [coin].concat(newMin);
        console.log(' new Min ' + min + ' for ' + amount);
      }
    }
    return (cache[amount] = min);
  };
}
var minCoinChange = new MinCoinChange([1,5,10,25]);
console.log(minCoinChange.makeChange(36));
