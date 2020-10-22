import Transaction from '../models/Transaction';
// import CreateTransactionService from '../services/CreateTransactionService';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

interface CreateTransaction {
  title: string;
  value: number;
  type: 'income' | 'outcome';
}

class TransactionsRepository {
  private transactions: Transaction[];

  constructor() {
    this.transactions = [];
  }

  public all(): Transaction[] {
    // TODO

    return this.transactions;
  }

  public getBalance(): Balance {
    // TODO
    const incomes = this.transactions.reduce((acc, transaction) => {
      if (transaction.type === 'income') {
        // eslint-disable-next-line no-param-reassign
        acc += transaction.value;
      }

      return acc;
    }, 0);

    const outcomes = this.transactions.reduce((acc, transaction) => {
      if (transaction.type === 'outcome') {
        // eslint-disable-next-line no-param-reassign
        acc += transaction.value;
      }

      return acc;
    }, 0);

    const balance = {
      income: incomes,
      outcome: outcomes,
      total: incomes - outcomes,
    };

    return balance;
  }

  public create({ title, value, type }: CreateTransaction): Transaction {
    // TODO
    const transaction = new Transaction({ title, value, type });

    this.transactions.push(transaction);

    return transaction;
  }
}

export default TransactionsRepository;
