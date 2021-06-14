// Required JavaScript library
var _ = require ("lodash");
var moment = require("moment");

// Main function to calculate the final balance calculated by category and within specified time window
function getBalanceByCategoryInPeriod (transactions, category, start, end) {
  var totalAmount = 0;
  //Returns matched elements of transactions array filtered by category key
  var transactionListByCategory = _.filter(transactions, ['category', category]);
  
  //Traverse through each element of the array transactionListByCategory
  _.map(transactionListByCategory, function(x) {
      //Here x refers to each object (element) of the array
      var finalStatus = withinTimePeriod(x.time, start, end)
      if (finalStatus === true) {
        totalAmount += x.amount
      }
    return totalAmount; //returning the final calculated balance from the map function
  });
  return totalAmount; //return value for getBalanceByCategoryInPeriod funtion
}


// This function returns true if the transcation time falls under the specified timeline
var withinTimePeriod = (transactionTime, startTime, endTime) => {
    // Check if a moment is between two other moments and returns true or false accordingly
    return moment(transactionTime).isBetween(startTime, endTime, undefined, '[)'); 
  // Note: '[)' is left inclusive that means it includes th start time but excludes the end time
}
