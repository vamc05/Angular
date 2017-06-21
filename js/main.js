var myApp = angular.module("myApp", []);
myApp.controller("AccountsCtrl", AccountsCtrl);
AccountsCtrl.$inject = ["AccountsService"];

function AccountsCtrl(AccountsService) {
    this.accounts = [];
    this.sortAccount = undefined;
    this.sortCash = undefined;
    this.limit = 3;
    this.getAccounts = function() {
        this.accounts = AccountsService.getAccounts().accounts;
    };
    this.getColorClass = function(change) {
        if (Number(change) == 0) {
            return "no-change";
        } else if (Number(change) < 0) {
            return "negative";
        } else {
            return "positive"
        }
    };

    this.addSymbol = function(change) {
        if (change > 0) {
            return "+"
        }
    };

    this.sortAccounts = function(type) {
        if (type === "account") {
            this.sortAccount = !this.sortAccount;
            this.sortCash = undefined;
        } else if (type === "cash") {
            this.sortCash = !this.sortCash;
            this.sortAccount = undefined;
        }
        if (this.sortAccount === true)
            this.accounts = AccountsService.getSortedAccountsByNumber();
        else if (this.sortAccount === false)
            this.accounts = AccountsService.getSortedAccountsByNumber().reverse();
        else if (this.sortCash === true)
            this.accounts = AccountsService.getSortedAccountsByCash();
        else
            this.accounts = AccountsService.getSortedAccountsByCash().reverse();
    };

    this.loadMore = function() {
        this.limit = 6;
    };

    this.getAccounts();
}