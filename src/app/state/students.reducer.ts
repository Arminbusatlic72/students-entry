import { StudentsRecords } from './students-record';
import { createReducer } from '@ngrx/store';
export const initState: ReadonlyArray<StudentsRecords> = [
  {
    name: 'Deepak',
    city: 'Ajmer',
    subject: 'Rajastan',
    country: 'Bosnia',
    passportDeclaration: 'Yes',
    fitnessDeclaration: 'Yes',
    courseName: 'Match',
    date: '23-10-1982',
    state: 'Rajastan',
    street: 'Semira Fraste 19',
    email: 'dzarma.busatlic@gmail.com',
    phone: '123123445',
    postalCode: 7100,
  },
];
export const studentsReducer = createReducer(initState);
