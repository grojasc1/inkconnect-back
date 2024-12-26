import { Module } from '@nestjs/common';
import { TattoohouseService } from './tattoohouse.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TattoohouseEntity } from './tattoohouse.entity/tattoohouse.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TattoohouseEntity])],
  providers: [TattoohouseService]
})
export class TattoohouseModule {}
