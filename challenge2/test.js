var moment = require("moment");

var sortTransactionsByTime = (transaction1, transaction2) => {
    console.log(moment(transaction1)) - (moment(transaction2));
    // return (moment(transaction1.time)) - (moment(transaction2.time));
}

sortTransactionsByTime("2013-07-18T19:00:00Z", "2013-07-18T20:00:00Z")