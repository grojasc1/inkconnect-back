import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ArtistModule } from './artist/artist.module';
import { ClientModule } from './client/client.module';
import { BookingModule } from './booking/booking.module';
import { TattoohouseModule } from './tattoohouse/tattoohouse.module';

@Module({
  imports: [UserModule, ArtistModule, ClientModule, BookingModule, TattoohouseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
