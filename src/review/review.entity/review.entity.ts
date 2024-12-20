import { ArtistEntity } from "../../artist/artist.entity/artist.entity";
import { ClientEntity } from "../../client/client.entity/client.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ReviewEntity {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    client_id: string;

    @Column()
    artist_id: string;

    @Column()
    rating: number;

    @Column()
    comment: string;

    @Column()
    created_at: Date;

    @ManyToOne(() => ClientEntity, client => client.reviews)
    client: ClientEntity;

    @ManyToOne(() => ArtistEntity, artist => artist.reviews)
    artist: ClientEntity;
}
