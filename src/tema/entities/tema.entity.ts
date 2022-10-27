import { IsNotEmpty } from "class-validator";
import { Postagem } from "../../Postagem/entities/postagem.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity({name: 'tb_temas'})
export class Tema {

    @PrimaryGeneratedColumn()
    id: number

    @IsNotEmpty()
    @Column({length:225, nullable:false})
    descricao: string


    @OneToMany(() => Postagem, (postagem) => postagem.tema,)
    postagem: Postagem[];

}