import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StyleEntity } from './style.entity/style.entity';
import { Repository } from 'typeorm';

@Injectable()
export class StyleService {
    constructor(
        @InjectRepository(StyleEntity)
        private readonly styleRepository: Repository<StyleEntity>,
    ) {}
}
