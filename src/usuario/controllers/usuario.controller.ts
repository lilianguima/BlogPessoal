import { Body, Controller, Get, HttpCode, HttpStatus, Post, Put, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { JwtAuthGuard } from "../../auth/guard/jwt-auth.guard";
import { Usuario } from "../entities/usuario.entity";
import { UsuarioService } from "../services/usuario.service";


@ApiTags('Usuario')
@Controller('/usuarios')
export class UsuarioController {
    constructor( private readonly usuarioService: UsuarioService) {}

    @UseGuards(JwtAuthGuard)
    @Get('/all')
    @ApiBearerAuth()
    @HttpCode(HttpStatus.OK)
    findAll (): Promise<Usuario[]>{
        return this.usuarioService.findAll();
    }
    @Post('/cadastrar')
    @HttpCode(HttpStatus.CREATED)
    async create (@Body () usuario: Usuario): Promise<Usuario>{
        return await this.usuarioService.create(usuario);
    }
    
    @UseGuards(JwtAuthGuard)
    @Put('/atualizar')
    @ApiBearerAuth()
    @HttpCode(HttpStatus.OK)
    async update (@Body() usuario: Usuario) : Promise<Usuario>{
        return this.usuarioService.update(usuario);
    }
}