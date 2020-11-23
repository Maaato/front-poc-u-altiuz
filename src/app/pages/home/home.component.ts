import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Student } from '../../models/student';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  profiles: string[] = ['Academico', 'Estudiantil'];
  form: FormGroup;
  constructor(
    private fb: FormBuilder,
    private studentService: StudentService,
    private router: Router
  ) {
    this.form = fb.group({
      rut: ['', Validators.required],
      profile: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    const student: Student = new Student(
      this.form.get('rut').value,
      this.form.get('profile').value
    );
    if (this.form.get('profile').value === 'Estudiantil') {
      this.studentService.getProfileEstudiantil(student).subscribe(
        (res: any) => {
          console.log('Flujo Estudiantil');
          this.router.navigate(['/perfil/estudiantil'], {
            state: { res },
          });
        },
        (err: any) => {
          console.error(`getProfile(): ${err}`);
        }
      );
    }

    if (this.form.get('profile').value === 'Academico') {
      this.studentService.getProfileAcademico(student).subscribe(
        (res: any) => {
          console.log('Flujo Academico');
          this.router.navigate(['/perfil/academico'], {
            state: { res },
          });
        },
        (err: any) => {
          console.error(`getProfile(): ${err}`);
        }
      );
    }
  }
}
