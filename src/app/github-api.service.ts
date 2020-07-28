import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GithubApiService {

  constructor(private httpClient: HttpClient) { 

  }

  public getRepo(){
    return this.httpClient.get(`https://api.github.com/users/AlexBrunGiglio/repos`);
  }  
}
