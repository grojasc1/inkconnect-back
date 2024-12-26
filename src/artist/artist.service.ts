import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ArtistEntity } from './artist.entity/artist.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ArtistService {
    constructor(
        @InjectRepository(ArtistEntity)
        private readonly artistRepository: Repository<ArtistEntity>,
    ){}
}