import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router"
import { Observable } from "rxjs";
import { Injectable } from '@angular/core';

@Injectable()
export class AuthGaurd implements CanActivate{

    constructor(private route: Router){

    }
    canActivate(route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean{
        if(localStorage.getItem("user")){
            return true
        }
        else{
            this.route.navigate(['/'])
            return false
        }
    }
}