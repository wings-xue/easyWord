import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class EnglishWord {

    @PrimaryGeneratedColumn()
    id: number;

    // 英文单词
    @Column()
    word: string;

    // 英文单词描述
    @Column({nullable:true})
    description: string;

    // 例句
    @Column({nullable:true})
    sentence: string;

    // 翻译
    @Column({nullable:true})
    translate: string;

    // 下一次出现时间
    @Column({nullable:true})
    nextDate: Date;

    // 出现次数
    @Column({nullable:true})
    views: number;

    // 单词类型; 生词， 熟词
    @Column({nullable:true})
    wordType: boolean;

}
