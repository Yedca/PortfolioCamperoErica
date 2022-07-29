import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencialab } from '../model/experiencialab';

@Injectable({
  providedIn: 'root'
})
export class SExperiencialabService {
expURL ='http://localhost:8080/expelab/'

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Experiencialab[]>{
    return this.httpClient.get<Experiencialab[]>(this.expURL + 'lista');
  }
  
  public detail(id: number): Observable<Experiencialab>{
    return this.httpClient.get<Experiencialab>(this.expURL + `detail/${id}`)
  
  }

  public save(experiencialab: Experiencialab): Observable<any>{
    return this.httpClient.post<any>(this.expURL + `create`, experiencialab);

  }

  public update(id: number,experiencialab: Experiencialab): Observable<any>{
    return this.httpClient.put<any>(this.expURL + `update/${id}`, experiencialab);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.expURL + `delete/${id}`);
  }
}
