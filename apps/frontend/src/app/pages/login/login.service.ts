import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserLoginDto, UserLoginResponse } from '@messager/shared-types';
import { ApiService } from '../../services/api.service';
import { LoginModule } from './login.module';

@Injectable()
export class LoginService {

  constructor(
    private readonly api: ApiService
  ) {
  }

  login(login: string): Observable<UserLoginResponse> {
    return this.api.post<UserLoginDto, UserLoginResponse>(`/users`, { login });
  }
}
