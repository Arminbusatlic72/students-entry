import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, exhaustMap, catchError } from 'rxjs/operators';

import { actionsList } from '../state/students-record.action';
import { StudentsRecordsService } from '../services/students-record.service';

@Injectable()
export class StudentsRecordsEffects {
  private actions$ = inject(Actions);
  private studentsRecordsService = inject(StudentsRecordsService);

  loadStudentsRecords$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actionsList.callStudentsRecordsApi),
      exhaustMap(() =>
        this.studentsRecordsService.getStudentsRecords().pipe(
          map((studentsRecords) => ({
            type: actionsList.callStudentsRecordsApiSuccess,
            payload: studentsRecords,
          })),
          catchError(() => EMPTY)
        )
      )
    )
  );
}
