import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GruposService {
  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getGrupos(): Observable<any> {
    return this.http.get(`${this.apiUrl}/grupos`);
  }

  registrarGrupo(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/registro-grupos`, data);
  }
}
