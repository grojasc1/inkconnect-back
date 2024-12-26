import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TattoohouseEntity } from './tattoohouse.entity/tattoohouse.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TattoohouseService {
    constructor(
        @InjectRepository(TattoohouseEntity)
        private readonly tattoohouseRepository: Repository<TattoohouseEntity>,
    ) {}
}
