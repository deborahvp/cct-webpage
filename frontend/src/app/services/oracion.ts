import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OracionService {
  private apiUrl = 'http://localhost:3000/api/oracion';

  constructor(private http: HttpClient) { }

  enviarSolicitud(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }
}
