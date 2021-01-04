import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';

@Injectable()
export class RootEffects {

  constructor(
    private actions$: Actions
  ) {}
}
