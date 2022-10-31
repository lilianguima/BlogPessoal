import { IsNotEmpty } from "class-validator";
import { Tema } from "../../tema/entities/tema.entity";
import { Usuario } from "../../usuario/entities/usuario.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";


@Entity({name: 'tb_postagens'})

export class  Postagem {

    @ApiProperty()
    @PrimaryGeneratedColumn() //Coluna, chaveprimaria e tem auto_incremento
    id: number; 

    @ApiProperty()
    @IsNotEmpty() 
    @Column({length: 100, nullable: false})  //nullable- not null
    titulo:string;

    @ApiProperty()
    @IsNotEmpty() 
    @Column({length: 1000, nullable: false})
    texto:string; 

    @ApiProperty()
    @UpdateDateColumn()
    Data: Date; 

    @ApiProperty()
    @ManyToOne(()=> Tema, (tema) => tema.postagem,{
        onDelete: "CASCADE"
    })
    tema: Tema;

    @ApiProperty()
    @ManyToOne(() => Usuario, (usuario) => usuario.postagem, {
        onDelete:"CASCADE"
    })
    usuario: Usuario
 }