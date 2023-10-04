import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environments';
import { AuthStatus, User } from '../interfaces';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //llamamos a nuestra variable de entorno
  private readonly baseUrl:string = environment.baseUrl;
//importamos httpclient para las peticiones http
  private http = inject(HttpClient);

  //utilizaremos las señales(signals)
  private _currentUser = signal<User | null>(null);
  private _authStatus = signal<AuthStatus>(AuthStatus.checking);

  constructor() { }

  login(email:string,password:string): Observable<boolean>{
    return of(true);
  }
}
