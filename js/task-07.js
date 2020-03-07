const amountInputRef = document.querySelector('.amount');
const buttonDepositRef = document.querySelector('.deposit');
const buttonWithdrawRef = document.querySelector('.withdraw');
const buttonBalanceRef = document.querySelector('.balance');
const transactionIdInputRef = document.querySelector('.transactionId');
const buttonSearchRef = document.querySelector('.search');
const buttonDepositTotalRef = document.querySelector('.depositTotal');
const buttonWithdrawTotalRef = document.querySelector('.withdrawTotal');

buttonDepositRef.addEventListener('click', () => {
  account.deposit(Number(amountInputRef.value));
});

buttonWithdrawRef.addEventListener('click', () => {
  account.withdraw(Number(amountInputRef.value));
});

buttonBalanceRef.addEventListener('click', () => {
  console.log(account.getBalance());
});

buttonSearchRef.addEventListener('click', () => {
  console.log(account.getTransactionDetails(transactionIdInputRef.value));
});

buttonDepositTotalRef.addEventListener('click', () => {
  console.log(account.getTransactionTotal(Transaction.DEPOSIT));
});

buttonWithdrawTotalRef.addEventListener('click', () => {
  console.log(account.getTransactionTotal(Transaction.WITHDRAW));
});

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
    // for (const transaction of this.transactions) {
    //   if (transaction.id === id) {
    //     return transaction;
    //   }
    // }
    // return 'Транзакция не найдена!';

    const searchResult = this.transactions.find(
      transaction => transaction.id === id,
    );
    return searchResult === undefined ? 'Транзакция не найдена!' : searchResult;
  },

  getTransactionTotal(type) {
    // let total = 0;
    // for (const transaction of this.transactions) {
    //   if (transaction.type === type) {
    //     total += transaction.amount;
    //   }
    // }
    // return `Количество средств типа ${type}: ${total}`;

    const total = this.transactions
      .filter(transaction => transaction.type === type)
      .reduce(
        (totalAmount, transaction) => totalAmount + transaction.amount,
        0,
      );
    return `Количество средств типа ${type}: ${total}`;
  },
};
