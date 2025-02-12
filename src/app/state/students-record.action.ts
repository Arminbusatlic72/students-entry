import { createAction, props } from '@ngrx/store';
import { StudentsRecords } from './students-record';

export const actionsList = {
  callStudentsRecordsApi:
    '[Students Table Component] Call students records API',
  callStudentsRecordsApiSuccess:
    '[Students Table Component] Call students records API',
};
export const callStudentsRecordsApi = createAction(
  actionsList.callStudentsRecordsApi
);
export const callStudentsRecordsApiSuccess = createAction(
  actionsList.callStudentsRecordsApiSuccess,
  props<{ payload: StudentsRecords[] }>()
);
