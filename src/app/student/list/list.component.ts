import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { StudentService } from '../services/student.service';
import { IStudent } from '../interfaces/i-student';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  students: { id: number; nom: string; prenom: string; email: string }[] = [];

  constructor(
    private _studentService: StudentService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this._studentService
      .findAll()
      .pipe(take(1))
      .subscribe((students: IStudent[]) => {
        console.log(`Got ${students.length} students`);
      });

    this._studentService.findSimpleStudents().subscribe((students) => {
      this.students = students.map((student) => {
        return {
          id: student.id,
          nom: student.nom,
          prenom: student.prenom,
          email: student.email,
        };
      });
    });
  }

  goToDashboard() {
    this.router.navigate(['/dashboard']);
  }
}
