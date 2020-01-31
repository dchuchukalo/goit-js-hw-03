const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

const account = {
  balance: 10,
  transactions: [
    { id: '_4kkj0nxbx', type: 'deposit', amount: 10 },
    { id: '_28terc5s8', type: 'deposit', amount: 10 },
    { id: '_5hfbzn52d', type: 'withdraw', amount: 10 },
  ],

  generateId() {
    return (
      '_' +
      Math.random()
        .toString(36)
        .substr(2, 9)
    );
  },

  createTransaction(amount, type) {
    return { id: this.generateId(), type: type, amount: amount };
  },

  deposit(amount) {
    this.balance += amount;
    const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
    this.transactions.push(transaction);
  },

  withdraw(amount) {
    if (amount > this.balance) {
      return console.log(
        'Cнятие такой суммы не возможно, недостаточно средств.',
      );
    }

    this.balance -= amount;
    const transaction = this.createTransaction(amount, Transaction.WITHDRAW);
    this.transactions.push(transaction);
  },

  getBalance() {
    return `Ваш баланс: ${this.balance}`;
  },

  getTransactionDetails(id) {
    for (const transaction of this.transactions) {
      if (transaction.id === id) {
        return transaction;
      }
    }
    return 'Транзакция не найдена!';
  },

  getTransactionTotal(type) {
    let total = 0;
    for (const transaction of this.transactions) {
      if (transaction.type === type) {
        total += transaction.amount;
      }
    }
    return `Количество средств типа ${type}: ${total}`;
  },
};

account.deposit(5);
account.deposit(5);
console.log(account.getBalance());
account.withdraw(30);
console.log(account.getBalance());
account.deposit(10);
console.log(account.getBalance());
account.withdraw(10);
console.log(account.getBalance());
console.log(account.getTransactionDetails('_4kkj0nxbx'));
console.log(account.getTransactionDetails('_4kkj0nxx'));
console.log(account.getTransactionTotal(Transaction.WITHDRAW));
