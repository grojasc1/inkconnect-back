import { ReviewEntity } from "../../review/review.entity/review.entity";
import { BookingEntity } from "../../booking/booking.entity/booking.entity";
import { UserEntity } from "../../user/user.entity/user.entity";
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { TattoohouseEntity } from "../../tattoohouse/tattoohouse.entity/tattoohouse.entity";
import { StyleEntity } from "../../style/style.entity/style.entity";
import { ImageEntity } from "../../image/image.entity/image.entity";

@Entity()
export class ArtistEntity {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    user_id: string;

    @Column()
    nickname: string;

    @Column()
    bio: string;

    @Column()
    address: string;

    @Column()
    social_media: string;

    @OneToOne(() => UserEntity, user => user.artist)
    user: UserEntity;

    @OneToMany(() => BookingEntity, booking => booking.artist_id)
    bookings: BookingEntity[];

    @OneToMany(() => ReviewEntity, review => review.artist_id)
    reviews: ReviewEntity[];

    @ManyToOne(() => TattoohouseEntity, tattoohouse => tattoohouse.artists)
    tattoohouse: TattoohouseEntity;

    @ManyToMany(() => StyleEntity, style => style.artists)
    @JoinTable()
    styles: StyleEntity[];

    @ManyToMany(() => ImageEntity, image => image.artists)
    @JoinTable()
    images: ImageEntity[];
}
