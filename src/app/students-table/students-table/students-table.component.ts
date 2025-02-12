import { Component, OnInit } from '@angular/core';
// import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';

import { StudentsRecords } from '../../state/students-record';
import { AppState, selectAll } from '../../state/students-selectors';
import * as Actions from '../../state/students-record.action';
@Component({
  selector: 'app-students-table',
  standalone: true,
  imports: [MatTableModule, MatInputModule, MatFormFieldModule],
  templateUrl: './students-table.component.html',
  styleUrl: './students-table.component.scss',
})
export class StudentsTableComponent implements OnInit {
  dataSource: any = [];
  dataSource$: Observable<StudentsRecords[]>;
  displayColumns: string[] = [
    'name',
    'city',
    'country',
    'subject',
    'passportDeclaration',
    'fitnessDeclaration',
    'courseName',
    'date',
    'state',
    'street',
    'email',
    'phone',
    'postalCode',
  ];
  constructor(private store: Store<AppState>) {
    this.dataSource$ = this.store.select(selectAll);
    this.store.dispatch(Actions.callStudentsRecordsApi());
  }
  ngOnInit(): void {
    this.dataSource$.subscribe((res: any) => {
      this.dataSource = res;
    });
  }
}
