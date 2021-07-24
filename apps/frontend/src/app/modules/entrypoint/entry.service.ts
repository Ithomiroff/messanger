import { Injectable } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { filter, tap } from 'rxjs/operators';

@Injectable()
export class EntryService {

  constructor(
    private readonly auth: AuthService,
    private readonly router: Router,
  ) {
    this.auth.currentUserLogin$
      .pipe(
        filter((login) => !login),
        tap(() => this.router.navigate(['/login']))
      )
      .subscribe();
  }
}
