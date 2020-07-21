import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { CookieService } from "ngx-cookie-service";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class UsersService {
    constructor(private http: HttpClient, private cookies: CookieService) {}
    
    login(user: any): Observable<any> {
      return this.http.post("Servicio/login", user);
    }
    register(user: any): Observable<any> {
      return this.http.post("Servicio/register", user);
    }
    setToken(token: string) {
      this.cookies.set("token", token);
    }
    getToken() {
      return this.cookies.get("token");
    }

}