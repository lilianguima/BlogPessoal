import { Body, Controller, HttpCode, HttpStatus, Post, UseGuards } from "@nestjs/common";
import { UsuarioLogin } from "../entities/usuariologin.entity";
import { LocalAuthGuard } from "../guard/local-auth.guard";
import { AuthService } from "../services/auth.service";


@Controller('/auth')
export class AuthController {
    constructor ( private authService: AuthService){}

    @UseGuards(LocalAuthGuard) //Guards - Guarda/ monitoramento de rota 
    @HttpCode(HttpStatus.OK)
    @Post('/logar')
    async Login (@Body()user: UsuarioLogin): Promise <any> {
        return this.authService.login(user);
    }
}