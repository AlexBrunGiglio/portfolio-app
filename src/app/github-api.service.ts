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
  // Github repo
  // getRepoGithub = () => {
  //   return new Promise((resolve, reject) => {
  //     let repo;
  //     this.http.get('https://api.github.com/users/AlexBrunGiglio/repos')
  //       .subscribe((data: any) => {
  //         repo = console.log(data);
  //         resolve(repo);
  //         // viewsEko = data.DataFeed[0].Rows[0].m_visits;
  //         // resolve(viewsEko);
  //       })
  //   })
  // }
}
