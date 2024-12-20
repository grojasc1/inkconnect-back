import { ArtistEntity } from "../../artist/artist.entity/artist.entity";
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ImageEntity {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    artist_id: string;

    @Column()
    url: string;

    @Column()
    description: string;

    @Column()
    tattooHouseId: string;

    @ManyToMany(() => ArtistEntity, artist => artist.images)
    artists: ArtistEntity[];
}
