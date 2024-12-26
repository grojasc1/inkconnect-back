import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BookingEntity } from './booking.entity/booking.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BookingService {
    constructor(
        @InjectRepository(BookingEntity)
        private readonly bookingRepository: Repository<BookingEntity>,
    ){}
}
