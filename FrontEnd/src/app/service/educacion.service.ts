import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { Educacion } from '../model/educacion';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  private apiServerUrl=environment.apiBaseUrl;
  
  constructor(private http: HttpClient) { }

  public getEducacion(): Observable<Educacion[]>{
    return this.http.get<Educacion[]>(`${this.apiServerUrl}/educacion/lista`);
  }
  
  public addEducacion(educacion: Educacion): Observable<any>{
    return this.http.post<Educacion>(`${this.apiServerUrl}/educacion/crear`, educacion);
  }

  public editEducacion(id: number, educacion: Educacion): Observable<any>{
    return this.http.put<Educacion>(`${this.apiServerUrl}/educacion/update/${id}`, educacion);
  }
  
  public delete(id: number): Observable<any>{
    return this.http.delete<void>(`${this.apiServerUrl}/educacion/delete/${id}`);
  }

}
