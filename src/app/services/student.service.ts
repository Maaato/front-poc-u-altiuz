import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from '../models/student';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private baseUrl: string = environment.baseUrl;
  private apiKey: string = environment.apiKey;
  constructor(private http: HttpClient) {}

  getProfileAcademico(student: Student) {
    const headers = {
      rut: `${student.rut}`,
      api_key: `${this.apiKey}`,
    };
    return this.http.get<any>(`${this.baseUrl}/o/uda/profile`, { headers });
  }

  getProfileEstudiantil(student: Student) {
    const headers = {
      api_key: `${this.apiKey}`,
    };
    return this.http.get<any>(`${this.baseUrl}/h/uda/profile/${student.rut}`, {
      headers,
    });
  }
}
