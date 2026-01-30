import { inject, Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import * as EmpActions from '../actions/emp.action';
import { EmpService } from '../../../service/emp.service';
import { Employee } from '../../../Models/Employee';

@Injectable()
export class EmpEffects {


private actions$ = inject(Actions)

  constructor( private empService: EmpService) {}

  loadEmployees$ = createEffect(() =>
    this.actions$.pipe(
      ofType(EmpActions.emp),
      tap(() => console.log('📢 emp action detected')),
      mergeMap(() =>
        this.empService.getEmployees().pipe(
          tap(res => console.log('✅ API response:', res)),
          map((employees) => EmpActions.empSuccess({employee: employees})),
          
          catchError((error) => of(EmpActions.empFailure({ error })))
        )
      )
    )
  );

  addemps=createEffect(() =>
  this.actions$.pipe(
    ofType(EmpActions.addemp),
    mergeMap(({ employee }: { employee: Employee }) => this.empService.addEmployee(employee).pipe(
      map((newEmployee: Employee) => EmpActions.addempSuccess({ employee: newEmployee })),
      catchError((error) => of(EmpActions.addempFailure({ error })))
    )
  )))
}