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

Account.prototype.depositFunds = function(deposit) {
  this.amount += deposit;
  displayBalance(this);
}

Account.prototype.withdrawFunds = function(withdrawal) {
  this.amount -= withdrawal;
  displayBalance(this);
}

// User Interface Logic:

function displayBalance(account) {
  $(".current-balance").html(account.amount)
}

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

      $("form.withdraw-deposit").submit(function(event) {
        event.preventDefault();
        var depositAmount = parseInt($("input#deposit").val());
        var withdrawAmount = parseInt($("input#withdrawal").val());
        $("input#deposit").val("");
        $("input#withdrawal").val("");

        if (isNaN(depositAmount) && isNaN(withdrawAmount)) {
          alert("Please enter an amount(s) to withdraw and/or deposit.");
        }
        if (withdrawAmount) {
          userAccount.withdrawFunds(withdrawAmount);
        }
        if (depositAmount) {
          userAccount.depositFunds(depositAmount);
        }
      });
    };
  });
});