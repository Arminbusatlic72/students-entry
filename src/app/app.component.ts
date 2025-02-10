import { Component } from '@angular/core';

import { StudentsTableComponent } from './students-table/students-table/students-table.component';

@Component({
  selector: 'app-root',
  imports: [StudentsTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'students-entry';
}
