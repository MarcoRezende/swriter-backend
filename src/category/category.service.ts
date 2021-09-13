import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { EntityManager } from 'typeorm';
import { Category } from './entities/category.entity';

@Injectable()
export class CategoryService extends TypeOrmCrudService<Category> {
  constructor(@InjectRepository(Category) categoryService) {
    super(categoryService);
  }

  async createOneBase(manager: EntityManager, { name }: Partial<Category>) {
    return manager.save(Category, { name });
  }
}