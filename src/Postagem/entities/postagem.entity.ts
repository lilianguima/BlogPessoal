import { IsNotEmpty } from "class-validator";
import { Tema } from "../../tema/entities/tema.entity";
import { Usuario } from "../../usuario/entities/usuario.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


@Entity({name: 'tb_postagens'})

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
    tema: Tema;

    @ManyToOne(() => Usuario, (usuario) => usuario.postagem, {
        onDelete:"CASCADE"
    })
    usuario: Usuario
 }