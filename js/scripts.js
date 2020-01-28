// Business Logic for Bank:
function Bank() {
  this.accounts = [],
  this.currentId = 0
}

Bank.prototype.addAccount = function(account) {
  account.id = this.assignId;
  this.accounts.push(account);
}

Bank.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

// Business Logic for Accounts:
function Account(name, amount) {
  this.name = name,
  this.amount = amount
}

// Account.prototype.depositFunds = function(deposit) {
//   var incrementedBalance = Account.amount + deposit;
//   return incrementedBalance;
// }

// Account.prototype.withdrawFunds = function(withdrawal) {
//   var decrementedBalance = Account.amount - withdrawal;
//   return decrementedBalance;
// }

Account.prototype.bankingOperation = function(deposit, withdrawal) {
  if (isNaN(deposit) && isNaN(withdrawal)) {
    alert("Please enter an amount(s) to withdraw and/or deposit.");
  }
  if (withdrawal) {
    var total = this.amount - withdrawal;
    return total;
  }
  if (deposit) {
    total = this.amount + deposit;
    return total;
  } 
}

// User Interface Logic:

$(document).ready(function() {
  $("form#initial-deposit").submit(function(event) {
    event.preventDefault();
    var accountHolder = $("input#account-name").val();
    var initialDeposit = parseInt($("input#initial-amount").val());

    var userAccount = new Account(accountHolder, initialDeposit);

    if (!initialDeposit || !accountHolder) {
      alert("Please complete all requried fields to open an account.")
    } else {
      $("form#initial-deposit").hide();
      $("form.withdraw-deposit").show();
      $("#current-balance").show();
      $(".current-balance").html(userAccount.amount);

      $("button#withdraw-deposit").click(function(event) {
        event.preventDefault();
        var depositAmount = parseInt($("input#deposit").val());
        var withdrawAmount = parseInt($("input#withdrawal").val());
        $("input#deposit").val("");
        $("input#withdrawal").val("");

        var newBalance = userAccount.bankingOperation(depositAmount, withdrawAmount);

        console.log(withdrawAmount);
        console.log(depositAmount);
        console.log(newBalance);
        $(".current-balance").html(newBalance);
      });
    };
  });
});