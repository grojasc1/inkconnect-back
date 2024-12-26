import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ArtistEntity } from './artist.entity/artist.entity';
import { Repository } from 'typeorm';
import { BusinessError, BusinessLogicException } from '../shared/errors/business-errors';

@Injectable()
export class ArtistService {
    constructor(
        @InjectRepository(ArtistEntity)
        private readonly artistRepository: Repository<ArtistEntity>,
    ){}

    async findAll(): Promise<ArtistEntity[]> {
        return await this.artistRepository.find({relations: ['user', 'bookings', 'reviews', 'tattoohouse', 'styles', 'images']});
    }

    async findOne(id: string): Promise<ArtistEntity> {
        const artist = await this.artistRepository.findOne({where: {id} ,relations: ['user', 'bookings', 'reviews', 'tattoohouse', 'styles', 'images']});   
        if (!artist) {
            throw new BusinessLogicException("The artist with the given id was not found", BusinessError.NOT_FOUND);
        }

        return artist;
    }

    async create(artist: ArtistEntity): Promise<ArtistEntity> {
        return await this.artistRepository.save(artist);
    }

    async update(id: string, artist: ArtistEntity): Promise<ArtistEntity> {
        const persistedArtist = await this.artistRepository.findOne({where: {id}});
        if (!persistedArtist) {
            throw new BusinessLogicException("The artist with the given id was not found", BusinessError.NOT_FOUND);
        }

        artist.id = id;

        return await this.artistRepository.save({...persistedArtist, ...artist});
    }

    async delete(id: string) {
        const artist = await this.artistRepository.findOne({where: {id}});
        if (!artist) {
            throw new BusinessLogicException("The artist with the given id was not found", BusinessError.NOT_FOUND);
        }

        await this.artistRepository.remove(artist);
    }
}
