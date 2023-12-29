import { Injectable, NotFoundException } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';

@Injectable()
export class CatsService {
  private cats: Cat[] = [];

  create(cat: Cat) {
    this.cats.push(cat);
  }

  findAll(): Cat[] {
    return this.cats;
  }

  findOne(id: string): Cat {
    const cat = this.cats.find(cat => cat.id === id);
    if(!cat) {
      throw new NotFoundException('Cat not found');
    }
    return cat;
  }

  deleteOne(id: string) {
    if(!this.cats.find(cat => cat.id === id)) {
      throw new NotFoundException('Cat not found');
    }
    this.cats = this.cats.filter(cat => cat.id !== id);
  }
}
