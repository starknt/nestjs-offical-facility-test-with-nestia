import { Module } from '@nestjs/common';
import { CoreModule } from './core/core.module';
import { CatsModule } from './cats/cats.module';

@Module({
  imports: [CoreModule, CatsModule],
})
export class AppModule {}
