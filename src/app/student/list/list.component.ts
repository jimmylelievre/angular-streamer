import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { StudentService } from '../services/student.service';
import { IStudent } from '../interfaces/i-student';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  constructor(private _studentService: StudentService) {}

  ngOnInit(): void {
    this._studentService
      .findAll()
      .pipe(take(1))
      .subscribe((students: IStudent[]) => {
        console.log(`Got ${students.length} students`);
      });
  }
}