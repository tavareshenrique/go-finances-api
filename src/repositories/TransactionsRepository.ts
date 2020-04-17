import { EntityRepository, Repository } from 'typeorm';

import Transaction from '../models/Transaction';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

interface TransactionDTO {
  value: number;
  type: 'income' | 'outcome';
}

@EntityRepository(Transaction)
class TransactionsRepository extends Repository<Transaction> {
  public async getBalance(transactions: TransactionDTO[]): Promise<Balance> {
    const income = transactions.reduce((total, transaction) => {
      return transaction.type === 'income' ? total + transaction.value : total;
    }, 0);

    const outcome = transactions.reduce((total, transaction) => {
      return transaction.type === 'outcome' ? total + transaction.value : total;
    }, 0);

    const total = income - outcome;

    const balance = {
      income,
      outcome,
      total,
    };

    return balance;
  }
}

export default TransactionsRepository;
