// import { CanActivate } from "@angular/router/src/utils/preactivation";
import { CanActivate } from "@angular/router";
export class AuthGuard implements CanActivate {
    canActivate() {
        console.log('auth');
        return true;
    }
}