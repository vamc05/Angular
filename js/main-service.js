myApp.service("AccountsService", AccountsService);
AccountsService.$inject = ["$http"];

function AccountsService($http) {
    this.accountsData = {
        "accounts": [
            { "accountType": "AAA", "accountNumber": "0029", "totalCash": "39160334.42", "todaysChangeInVal": "31435.87", "todaysChange": "-0.07" },
            { "accountType": "IRA", "accountNumber": "5200", "totalCash": "5763.36", "todaysChangeInVal": "8916.69", "todaysChange": "-0.08" },
            { "accountType": "AAA", "accountNumber": "1812", "totalCash": "2010926.10", "todaysChangeInVal": "38881.63", "todaysChange": "0.21" },
            { "accountType": "IRA", "accountNumber": "0146", "totalCash": "15884302.39", "todaysChangeInVal": "7430.83", "todaysChange": "0.03" },
            { "accountType": "AAA", "accountNumber": "3810", "totalCash": "10050054.07", "todaysChangeInVal": "8916.69", "todaysChange": "0.07" },
            { "accountType": "REG", "accountNumber": "2019", "totalCash": "13465679.34", "todaysChangeInVal": "0.00", "todaysChange": "0.00" }
        ]
    };

    this.getAccounts = function() {
        return this.accountsData;
    };

    this.getSortedAccountsByNumber = function() {
        var data = this.accountsData.accounts;
        for (var i = 0; i < data.length; i++) {
            for (var j = 0; j < data.length; j++) {
                if (Number(data[i].accountNumber) < Number(data[j].accountNumber)) {
                    var temp = data[i];
                    data[i] = data[j];
                    data[j] = temp;
                }
            }
        }
        return data;
    };

    this.getSortedAccountsByCash = function() {
        var data = this.accountsData.accounts;
        for (var i = 0; i < data.length; i++) {
            for (var j = 0; j < data.length; j++) {
                if (Number(data[i].totalCash) < Number(data[j].totalCash)) {
                    var temp = data[i];
                    data[i] = data[j];
                    data[j] = temp;
                }
            }
        }
        return data;
    };
}