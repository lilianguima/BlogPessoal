import { IsNotEmpty } from "class-validator";
import { Tema } from "src/tema/entities/tema.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


@Entity({name: 'tb_postagem'})
export class  Postagem {

    @PrimaryGeneratedColumn() //Coluna, chaveprimaria e tem auto_incremento
    id: number; 

    @IsNotEmpty() 
    @Column({length: 100, nullable: false})  //nullable- not null
    titulo:string;

    @IsNotEmpty() 
    @Column({length: 1000, nullable: false})
    texto:string; 

    @UpdateDateColumn()
    Data: Date; 

    @ManyToOne(()=> Tema, (tema) => tema.postagem,{
        onDelete: "CASCADE"
    })
    tema: Tema
    static tema: any;
 }