import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { Educacion } from '../model/educacion';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  educURL = "http://localhost:8080/educ/"
  
  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Educacion[]>{
    return this.httpClient.get<Educacion[]>(this.educURL + `lista`);
  }

  public detail(id: number): Observable<Educacion>{
    return this.httpClient.get<Educacion>(this.educURL + `detail/${id}`);
  }
  
  public save(educacion: Educacion): Observable<any>{
    return this.httpClient.post<any>(this.educURL + `create`, educacion);
  }

  public update(id:number, educacion: Educacion): Observable<any>{
    return this.httpClient.put<any>(this.educURL + `update/${id}`, educacion);
  }
  
  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.educURL + `delete/${id}`);
  }

}
