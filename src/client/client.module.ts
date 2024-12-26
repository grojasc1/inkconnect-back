import { Module } from '@nestjs/common';
import { ClientService } from './client.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientEntity } from './client.entity/client.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ClientEntity])],
  providers: [ClientService]
})
export class ClientModule {}
