// Required JavaScript library
var moment = require("moment");

function findDuplicateTransactions (transactions = []) {
    let duplicateTransactions = [];
    if (transactions.length < 2) return duplicateTransactions; //Single transaction cannot have any duplicate transactions
    transactions.sort(compareTransactionsByTime); //sorting array using compare function
    transactions.forEach(transaction => {
        let duplicateGroups = false;
        for (let duplicateCollection of duplicateTransactions) {
            if (bothAreDuplicate(transaction, duplicateCollection[duplicateCollection.length - 1])) {
                duplicateCollection.push(transaction);
                duplicateGroups = true;
                break;
            }
        }
        if (!duplicateGroups) duplicateTransactions.push([transaction]);
    });
    return duplicateTransactions.filter(duplicateCollection => duplicateCollection.length > 1);
}

// This function returns the difference of time (in minutes) between two transactions
var differenceWithinMinute = (transactionTime1, transactionTime2) => {
    return  Math.abs(moment(transactionTime1).diff(moment(transactionTime2), 'minutes'));
}

// Returns true/false based upon duplicacy check between two particular transactions
var bothAreDuplicate = (transaction1, transaction2) => {
    return ((transaction1.sourceAccount === transaction2.sourceAccount)
        && (transaction1.targetAccount === transaction2.targetAccount)
        && (transaction1.category === transaction2.category)
        && (transaction1.amount === transaction2.amount)
        && (differenceWithinMinute(transaction1.time, transaction2.time) < 1));
}

var compareTransactionsByTime = (transaction1, transaction2) => {
  return (moment(transaction1.time)) - (moment(transaction2.time));
}