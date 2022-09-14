import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable()

export class LoginGuard implements CanActivate {
    constructor(private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
        const token = localStorage.getItem('token');
        if (token) this.router.navigate(['list']);   // при наличие токена показывается стараница list
        return (!token);
    }
}

// canActivate возвращает true или false. И в зависимости от условия отображает компонент