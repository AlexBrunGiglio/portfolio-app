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
    return this.httpClient.get(`http://185.163.127.73:8080/api/infos`);
  }

  public getSkills(){
    return this.httpClient.get('http://185.163.127.73:8080/api/skills')
  }

  public getSchool(){
    return this.httpClient.get('http://185.163.127.73:8080/api/parcours');
  }

  public postMail(mail){
    return this.httpClient.post('http://185.163.127.73:8080/api/mail', mail);
  }
}
