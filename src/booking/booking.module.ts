import { Module } from '@nestjs/common';
import { BookingService } from './booking.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookingEntity } from './booking.entity/booking.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BookingEntity])],
  providers: [BookingService]
})
export class BookingModule {}
