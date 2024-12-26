import { Module } from '@nestjs/common';
import { StyleService } from './style.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StyleEntity } from './style.entity/style.entity';

@Module({
  imports: [TypeOrmModule.forFeature([StyleEntity])],
  providers: [StyleService]
})
export class StyleModule {}
