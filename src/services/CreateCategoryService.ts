import { getRepository } from 'typeorm';

// import AppError from '../errors/AppError';

import Category from '../models/Category';

interface Request {
  title: string;
}

interface CategoryDTO {
  id: string;
  title: string;
}

class CreateTransactionService {
  public async execute({ title }: Request): Promise<CategoryDTO> {
    const categoryRepository = getRepository(Category);

    const categoryExists = await categoryRepository.findOne({
      where: { title },
    });

    if (categoryExists) {
      const category = (categoryExists as unknown) as CategoryDTO;

      return category;
    }

    const category = categoryRepository.create({
      title,
    });

    await categoryRepository.save(category);

    return category;
  }
}

export default CreateTransactionService;
