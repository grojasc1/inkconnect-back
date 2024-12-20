import { ArtistEntity } from "../../artist/artist.entity/artist.entity";
import { ClientEntity } from "../../client/client.entity/client.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class BookingEntity {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    client_id: string;

    @Column()
    artist_id: string;

    @Column()
    date: Date;

    @Column()
    details: string;

    @Column()
    status: string;

    @ManyToOne(() => ClientEntity, client => client.bookings)
    client: ClientEntity;

    @ManyToOne(() => ArtistEntity, artist => artist.bookings)
    artist: ArtistEntity;
}
