import { Controller } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { Cat } from './interfaces/cat.interface';
import { TypedBody, TypedException, TypedParam, TypedRoute } from '@nestia/core';
import { randomUUID } from 'node:crypto'
import { tags } from 'typia'

// @UseGuards(RolesGuard)
@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @TypedRoute.Delete(':id')
  @TypedException<{  }>(404, 'Cat not found')
  async remove(@TypedParam('id') id: string & tags.Format<'uuid'>) {
    return this.catsService.deleteOne(id);
  }

  @TypedRoute.Post()
  // @Roles(['admin'])
  async create(@TypedBody() createCatDto: CreateCatDto) {
    this.catsService.create({
      id: randomUUID(),
      ...createCatDto,
    });
  }

  @TypedRoute.Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  @TypedException<{  }>(404, 'Cat not found')
  @TypedRoute.Get(':id')
  async findOne(@TypedParam('id') id: string & tags.Format<'uuid'>): Promise<Cat> {
    return this.catsService.findOne(id);
  }
}
