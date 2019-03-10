import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class EnglishWord {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    word: string;

    @Column()
    description: string;

    @Column()
    sentence: string;

    @Column()
    translate: string;

    @Column()
    nextDate: Date;

    @Column()
    views: number;

    @Column()
    isPublished: boolean;
}