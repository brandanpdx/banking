// Business Logic for Bank Account:

function Account(name, amount) {
  this.name = name;
  this.amount = amount;
}

Account.prototype.depositFunds = function(deposit) {
  var incrementedBalance = Account.amount + deposit;
  return incrementedBalance;
}

Account.prototype.withdrawFunds = function(withdrawal) {
  var decrementedBalance = Account.amount - withdrawal;
  return decrementedBalance;
}

// User Interface Logic:

$(document).ready(function() {
  $("form#initial-deposit").submit(function(event) {
    if () // add conditional logic for initial deposit
    $("form#initial-deposit").hide();
    $("form#withdraw-deposit").show();
    $("#current-balance").show();


  })
})