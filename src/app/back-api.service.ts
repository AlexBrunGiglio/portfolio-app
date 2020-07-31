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
    return this.httpClient.get(`https://api.alexandrebrungiglio.fr/api/infos`);
  }

  public getSkills(){
    return this.httpClient.get('https://api.alexandrebrungiglio.fr/api/skills')
  }

  public getSchool(){
    return this.httpClient.get('https://api.alexandrebrungiglio.fr/api/parcours');
  }

  public postMail(mail){
    return this.httpClient.post('https://api.alexandrebrungiglio.fr/api/mail', mail);
  }
}
