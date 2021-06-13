import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioService } from '../services/service-usuario';

@Injectable()
export class UsuarioEditar implements Resolve<any>{


    constructor(private serviceUsuario: UsuarioService) {}

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<any>|Promise<any>|any{
        let paramlogin = route.params["login"];
        if( paramlogin != undefined && paramlogin != "")
        {
            return this.serviceUsuario.dadosDefaultUsuario(paramlogin);
        }
        else
        {
            return this.serviceUsuario.dadosDefaultCedente();
        }
    }

}
