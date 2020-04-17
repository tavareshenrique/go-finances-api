import csv from 'csvtojson';
import path from 'path';
import fs from 'fs';

import uploadConfig from '../config/upload';

import Transaction from '../models/Transaction';

import CreateTransactionService from './CreateTransactionService';
import CreateCategoryService from './CreateCategoryService';

interface Request {
  filename: string;
}

class ImportTransactionsService {
  async execute({ filename }: Request): Promise<Transaction[]> {
    const createTransactionService = new CreateTransactionService();
    const createCategoryService = new CreateCategoryService();

    const filePath = path.join(uploadConfig.directory, filename);

    const csvfile = await csv().fromFile(filePath);

    await fs.promises.unlink(filePath);

    const transactions: Transaction[] = [];

    // eslint-disable-next-line no-restricted-syntax
    for (const item of csvfile) {
      const { title, type, value, category } = item;

      // eslint-disable-next-line no-await-in-loop
      const { title: categoryTitle } = await createCategoryService.execute({
        title: category,
      });

      // eslint-disable-next-line no-await-in-loop
      const transaction = await createTransactionService.execute({
        title,
        type,
        value: Number.parseFloat(value),
        category: categoryTitle,
      });

      transactions.push(transaction);
    }

    return transactions;
  }
}

export default ImportTransactionsService;
