import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


const baseUrl = 'http://localhost:8080/api/v1';

type LoginData = Pick<User, 'email' | 'password'>;

interface User {
  email: string;
  password: string;
  name: string;
  cpf: string;
}

interface Token {
  token: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private api: HttpClient) {}

  login(data: LoginData) {
    return this.api
      .post(`${baseUrl}/users/auth`, data)
      .pipe(catchError(this.#handleError));
  }

  createUser(data: User) {
    return this.api
      .post(`${baseUrl}/users`, data)
      .pipe(catchError(this.#handleError));
  }

  #handleError = (res: HttpErrorResponse) => {
    const message = res.error?.title || res.message;

    console.log('error message', message);
    return throwError(res);
  };
}
