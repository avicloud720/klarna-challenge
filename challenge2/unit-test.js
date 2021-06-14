let assert = require("chai").assert;

describe("findDuplicateTransactions()", function() {
  it("returns empty array if there are no transactions", function() {
    assert.deepEqual(findDuplicateTransactions([]), []);
  });
  
  it("returns duplicate transactions", function() {
    assert.deepEqual(findDuplicateTransactions([
    {
      id: 123,
      sourceAccount: 'my_account',
      targetAccount: 'coffee_shop',
      amount: 30,
      category: 'groceries',
      time: "2013-07-14T19:00:00Z"
    },
    {
      id: 124,
      sourceAccount: 'my_account',
      targetAccount: 'coffee_shop',
      amount: 30,
      category: 'groceries',
      time: "2013-07-14T19:00:09Z"
    },
    {
      id: 125,
      sourceAccount: 'my_account',
      targetAccount: 'coffee_shop',
      amount: 12,
      category: 'eating_out',
      time: "2013-07-16T19:00:00Z"
    },
    {
      id: 126,
      sourceAccount: 'my_account',
      targetAccount: 'coffee_shop',
      amount: 10,
      category: 'groceries',
      time: "2013-07-18T19:00:00Z"
    },
    {
      id: 127,
      sourceAccount: 'my_account',
      targetAccount: 'coffee_shop',
      amount: 30,
      category: 'groceries',
      time: "2013-07-25T19:00:00Z"
    }
    ]), [
        [
    {
      id: 123,
      sourceAccount: 'my_account',
      targetAccount: 'coffee_shop',
      amount: 30,
      category: 'groceries',
      time: '2013-07-14T19:00:00Z'
    },
    {
      id: 124,
      sourceAccount: 'my_account',
      targetAccount: 'coffee_shop',
      amount: 30,
      category: 'groceries',
      time: '2013-07-14T19:00:09Z'
    }
  ]
    ]);
  });
  
});
