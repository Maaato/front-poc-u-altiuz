import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-profile-academico',
  templateUrl: './profile-academico.component.html',
  styleUrls: ['./profile-academico.component.css'],
})
export class ProfileAcademicoComponent implements OnInit {
  profileData: any;

  constructor(private student: StudentService, private router: Router) {
    this.router.getCurrentNavigation().extras.state
      ? (this.profileData = this.router.getCurrentNavigation().extras.state.res[0])
      : this.router.navigate(['/']);
  }

  ngOnInit(): void {
    console.log(this.profileData);
  }
}
