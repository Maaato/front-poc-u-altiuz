import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileAcademicoComponent } from './pages/profile-academico/profile-academico.component';
import { ProfileEstudiantilComponent } from './pages/profile-estudiantil/profile-estudiantil.component';
import { HomeComponent } from './pages/home/home.component';
import { StudentService} from './services/student.service';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileAcademicoComponent,
    ProfileEstudiantilComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    StudentService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
