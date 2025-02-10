import { createSelector } from '@ngrx/store';

import { StudentsRecords } from './students-record';

export interface AppState {
  studentsRecords: StudentsRecords[];
}

export const selectFeature = (state: AppState) => state.studentsRecords;
export const selectAll = createSelector(
  selectFeature,
  (state: StudentsRecords[]) => state
);
