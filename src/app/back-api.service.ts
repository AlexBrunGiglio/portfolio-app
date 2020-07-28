import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Schools } from '../app/schools';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackApiService {

  constructor(private httpClient: HttpClient) { }

  public getInfos(){
    return this.httpClient.get(`http://127.0.0.1:8000/api/infos`);
  }

  public getSkills(){
    return this.httpClient.get('http://127.0.0.1:8000/api/skills')
  }

  public getSchool(){
    return this.httpClient.get('http://127.0.0.1:8000/api/parcours');
  }
}
