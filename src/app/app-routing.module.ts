import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { ProfileAcademicoComponent } from './pages/profile-academico/profile-academico.component';
import { ProfileEstudiantilComponent } from './pages/profile-estudiantil/profile-estudiantil.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'perfil/academico', component: ProfileAcademicoComponent },
  { path: 'perfil/estudiantil', component: ProfileEstudiantilComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
