import { HTTP_INTERCEPTORS, HttpHandler, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { HttpEvent } from "@angular/common/http";
import { TokenService } from "./token.service";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class InterceptorService {
    constructor(private TokenService: TokenService){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
        let intReq = req;
        const token = this.TokenService.getToken();
        if(token != null){
            intReq = req.clone({
                headers: req.headers.set("Authorization","Bearer " + token)
            });
        }
        return next.handle(intReq);
    }
}

export const interceptorProvider = [{
    provide: HTTP_INTERCEPTORS, 
    useClass: InterceptorService,
    multi: true
}];
