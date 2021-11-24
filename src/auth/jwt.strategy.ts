import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){
    constructor(){
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: "SECRET" //.env-be
        });
    }

    // a payload itt a dekódolt jwt
    async validate(payload: any){
        //ha lenne egy db-nk: const user = await this.usersService.getById(payload.id)
        return{
            id: payload.sub,
            name: payload.name
        }
    }
}