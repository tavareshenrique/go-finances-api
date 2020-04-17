import { getCustomRepository } from 'typeorm';

import csv from 'csv-parse';
import fs from 'fs';

import uploadConfig from '../config/upload';

import CreateCategoryService from './CreateCategoryService';

import AppError from '../errors/AppError';

import TransactionsRepository from '../repositories/TransactionsRepository';
import Transaction from '../models/Transaction';

interface TransactionDTO {
  total: number;
}

class ImportTransactionsService {
  async execute(filename: string): Promise<object[]> {
    const csvItens: string[] = [];
    const allCsvItens: object[] = [];

    const createCategory = new CreateCategoryService();
    const transactionRepository = getCustomRepository(TransactionsRepository);

    fs.createReadStream(`${uploadConfig.directory}/${filename}`)
      .pipe(csv())
      .on('data', data => csvItens.push(data))
      .on('end', async () => {
        for (let i = 1; i < csvItens.length; i += 1) {
          const title = csvItens[i][0].replace(/\s/g, '');
          const type = csvItens[i][1].replace(/\s/g, '');
          const value = parseInt(csvItens[i][2].replace(/\s/g, ''), 0);
          const category = csvItens[i][3].replace(/\s/g, '');

          const category_id = (await createCategory.execute({
            title: category,
          })) as string;

          const obj = {
            title,
            value,
            type,
            category_id,
          };

          allCsvItens.push(obj);

          const transaction = transactionRepository.create(obj);

          await transactionRepository.save(transaction);
        }

        return allCsvItens;
      });
  }
}

export default ImportTransactionsService;
