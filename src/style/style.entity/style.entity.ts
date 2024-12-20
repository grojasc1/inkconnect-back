import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class StyleEntity {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    description: string;
}
