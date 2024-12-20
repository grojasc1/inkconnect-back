import { ArtistEntity } from "src/artist/artist.entity/artist.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class TattoohouseEntity {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    address: string;

    @Column()
    phone: string;

    @Column()
    email: string;

    @Column()
    social_media: string;

    @Column()
    description: string;

    @Column()
    opening_hours: string;

    @Column()
    closing_hours: string;

    @OneToMany(() => ArtistEntity, artist => artist.tattoohouse)
    artists: ArtistEntity[];
}
