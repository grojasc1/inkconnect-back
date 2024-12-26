import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ArtistModule } from './artist/artist.module';
import { ClientModule } from './client/client.module';
import { BookingModule } from './booking/booking.module';
import { TattoohouseModule } from './tattoohouse/tattoohouse.module';
import { ReviewModule } from './review/review.module';
import { StyleModule } from './style/style.module';
import { ImageModule } from './image/image.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './user/user.entity/user.entity';
import { ArtistEntity } from './artist/artist.entity/artist.entity';
import { ClientEntity } from './client/client.entity/client.entity';
import { BookingEntity } from './booking/booking.entity/booking.entity';
import { TattoohouseEntity } from './tattoohouse/tattoohouse.entity/tattoohouse.entity';
import { ReviewEntity } from './review/review.entity/review.entity';
import { StyleEntity } from './style/style.entity/style.entity';
import { ImageEntity } from './image/image.entity/image.entity';

@Module({
  imports: [UserModule, ArtistModule, ClientModule, BookingModule, TattoohouseModule, ReviewModule, StyleModule, ImageModule,
    TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'inkconnect',
    entities: [UserEntity, ArtistEntity, ClientEntity, BookingEntity, TattoohouseEntity, ReviewEntity, StyleEntity, ImageEntity],
    dropSchema: true,
    synchronize: true,
    keepConnectionAlive: true,
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
