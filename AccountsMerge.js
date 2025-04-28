/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
//coding decoded
class UnionFind {
    constructor(n) {
        this.parent = new Array(n);
        for (let i = 0; i < n; i++){
            this.parent[i] = i;
        }
    }

    find(x) {
        if (this.parent[x] != x) {
            this.parent[x] = this.find(this.parent[x]);
        }
        return this.parent[x];
    }

    union(x, y) {
        const parentX = this.find(x);
        const parentY = this.find(y);
        if (parentX !== parentY) {
            this.parent[parentX] = parentY;
        }
    }
}

class Account{
    constructor(name) {
        this.name = name;
        this.emails = new Set();
    }

    toList() {
        return [this.name, ...Array.from(this.emails).sort()]
    }
}
var accountsMerge = function(accounts) {
    
    let emailAccountMap = new Map();
    let uf = new UnionFind(accounts.length);

    for (let i = 0; i < accounts.length; i++){
        const account = accounts[i];

        for (let j = 1; j < account.length; j++){
            if (!emailAccountMap.has(account[j]))
                emailAccountMap.set(account[j], i);
            else {
                let prevAccountId = emailAccountMap.get(account[j]);
                uf.union(prevAccountId, i);
            }
                
        }
    }

    let finalAccounts = new Map();

    for (let i = 0; i < accounts.length; i++){
        let parentAccount = uf.find(i);
        if (!finalAccounts.has(parentAccount)) {
            finalAccounts.set(parentAccount, new Account(accounts[i][0]));
        }
        let account = accounts[i];
        for (let j = 1; j < account.length; j++){
            finalAccounts.get(parentAccount).emails.add(account[j]);
        }
    }

    return Array.from(finalAccounts.values()).map(acc => acc.toList());

};

let x = accountsMerge([["John", "johnsmith@mail.com", "john_newyork@mail.com"], ["John", "johnsmith@mail.com", "john00@mail.com"], ["Mary", "mary@mail.com"], ["John", "johnnybravo@mail.com"]]);
console.log(x);