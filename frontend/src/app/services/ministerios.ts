import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MinisteriosService {
  private apiUrl = 'http://localhost:3000/api/ministerios';

  constructor(private http: HttpClient) { }

  getMinisterios(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
