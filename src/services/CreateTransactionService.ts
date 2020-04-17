import { getCustomRepository } from 'typeorm';

import AppError from '../errors/AppError';

import CreateCategoryService from './CreateCategoryService';

import Transaction from '../models/Transaction';
import TransactionsRepository from '../repositories/TransactionsRepository';

interface Request {
  title: string;
  value: number;
  type: 'income' | 'outcome';
  category: string;
}

interface TransactionDTO {
  total: number;
}

class CreateTransactionService {
  public async execute({
    title,
    value,
    type,
    category,
  }: Request): Promise<Transaction> {
    const transactionRepository = getCustomRepository(TransactionsRepository);
    const createCategory = new CreateCategoryService();
    const transactions = await transactionRepository.find();

    if (type === 'outcome') {
      const { total } = (await (transactionRepository.getBalance(
        transactions,
      ) as unknown)) as TransactionDTO;

      if (value > total) {
        throw new AppError('Outcome is not available at this time.');
      }
    }

    const { id: category_id } = await createCategory.execute({
      title: category,
    });

    const transaction = transactionRepository.create({
      title,
      value,
      type,
      category_id,
    });

    await transactionRepository.save(transaction);

    return transaction;
  }
}

export default CreateTransactionService;
