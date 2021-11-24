import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Observable } from "rxjs";

@Injectable()
export class AuthenticatedGuard implements CanActivate{
    async canActivate(context: ExecutionContext) {
        const request = context.switchToHttp().getRequest();

        //ha van egy session egy adott user-re, akkor ez true lesz, ellenben false
        // Tulajdonképpen, ha már bejelentkeztünk, és el akarunk érni olyan route-kat, amelyhez be kell jelentkezni, ez lehetővé teszi
        return request.isAuthenticated();
    }
    
}