// Business Logic for Bank:
function Bank() {
  this.accounts = [],
  this.currentId = 0
}

Bank.prototype.addAccount = function(account) {
  account.id = this.assignId();
  this.accounts.push(account);
}

Bank.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

Bank.prototype.findAccount = function(id) {
  for (var i=0; i< this.accounts.length; i++) {
    if (this.accounts[i]) {
      if (this.accounts[i].id == id) {
        return this.accounts[i];
      }
    }
  };
  return false;
}

// Business Logic for Accounts:
function Account(name, amount) {
  this.name = name,
  this.amount = amount
}

Account.prototype.depositFunds = function(deposit) {
  this.amount += deposit;
  displayBalance(this.id);
}

Account.prototype.withdrawFunds = function(withdrawal) {
  this.amount -= withdrawal;
  displayBalance(this.id);
}

// User Interface Logic:
var epicodusBank = new Bank();

function displayBalance(accountId) {
  var currentAccount = epicodusBank.findAccount(accountId);
  $(".current-balance").html(currentAccount.amount);
}

$(document).ready(function() {
  $("form#initial-deposit").submit(function(event) {
    event.preventDefault();
    var accountHolder = $("input#account-name").val();
    var initialDeposit = parseInt($("input#initial-amount").val());

    if (!initialDeposit || !accountHolder) {
      alert("Please complete all requried fields to open an account.")
    } else {
      var userAccount = new Account(accountHolder, initialDeposit);
      epicodusBank.addAccount(userAccount);
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