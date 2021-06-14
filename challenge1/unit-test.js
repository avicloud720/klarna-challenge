let assert = require("chai").assert;

describe("getBalanceByCategoryInPeriod()", function() {
  
  it("returns 0 if there are no transactions", function() {
    assert.equal(
      getBalanceByCategoryInPeriod(
        [],
        "groceries",
        new Date("2018-03-01"),
        new Date("2018-03-31")
      ),
      0
    );
  });
  
  it("Category >> eating_out & TimeWindow >> whole month", function() {
    assert.equal(
      getBalanceByCategoryInPeriod(
        [
          {
            id: 123,
            sourceAccount: 'my_account',
            targetAccount: 'coffee_shop',
            amount: -30,
            category: 'eating_out',
            time: "2013-07-14T19:00:00Z"
          },
          {
            id: 124,
            sourceAccount: 'my_account',
            targetAccount: 'coffee_shop',
            amount: 30,
            category: 'eating_out',
            time: "2013-07-15T19:00:00Z"
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
            category: 'eating_out',
            time: "2013-07-25T19:00:00Z"
          },
        ],
        "eating_out",
        "2013-07-01T18:00:00Z",
        "2013-07-31T20:00:00Z"
      ),
      42
    );
  });

  it("includes transactions on `start` and excludes transactions on `end`", function() {
    assert.equal(
      getBalanceByCategoryInPeriod(
        [
            {
              id: 123,
              sourceAccount: 'my_account',
              targetAccount: 'coffee_shop',
              amount: -30,
              category: 'eating_out',
              time: "2013-07-14T19:00:00Z"
            },
            {
              id: 124,
              sourceAccount: 'my_account',
              targetAccount: 'coffee_shop',
              amount: 30,
              category: 'eating_out',
              time: "2013-07-15T19:00:00Z"
            },
            {
              id: 125,
              sourceAccount: 'my_account',
              targetAccount: 'coffee_shop',
              amount: 10,
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
              category: 'eating_out',
              time: "2013-07-25T19:00:00Z"
            },
        ],
        "eating_out",
        "2013-07-16T19:00:00Z",
        "2013-07-19T20:00:00Z"
      ),
      10
    );
  });
  
});
