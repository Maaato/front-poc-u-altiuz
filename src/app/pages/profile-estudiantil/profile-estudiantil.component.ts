import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-estudiantil',
  templateUrl: './profile-estudiantil.component.html',
  styleUrls: ['./profile-estudiantil.component.css'],
})
export class ProfileEstudiantilComponent implements OnInit {
  profileData: any;
  semestresData: any[];
  semestreSelected: any[];

  constructor(private router: Router) {
    this.router.getCurrentNavigation().extras.state
      ? (this.profileData = this.router.getCurrentNavigation().extras.state.res.data[0])
      : this.router.navigate(['/']);
    this.semestresData = this.profileData.carrera.semestres;
  }

  ngOnInit(): void {
    console.log(this.profileData);
  }

  seleccionarSemestre(indexSemestre) {
    this.semestreSelected = this.semestresData[indexSemestre];
    console.log(this.semestreSelected);
  }
}
