import { Injectable } from "@nestjs/common";
import { PassportSerializer } from "@nestjs/passport";

@Injectable()
// a serializert registrélni kell az auth.module-ban
export class SessionSerializer extends PassportSerializer{
    serializeUser(user: any, done: Function) {
        // ha egy db-vel lenne dolgunk, így is csinálhattuk volna
        // done(null, {id: user.id})
        done(null, user)
    }

    deserializeUser(payload: any, done: Function) {
        // ha egy db-vel lenne dolgunk, így is csinálhattuk volna
        // const user = this.usersService.findById(payload.id)
        // done(null, user)
        done(null, payload)
        
    }
}