import { Component, OnInit } from '@angular/core';
import { GithubApiService } from '../github-api.service'

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  repos;

  constructor(private githubapiService: GithubApiService) {

   }

  ngOnInit(): void {
    this.githubapiService.getRepo().subscribe((data)=>{
      this.repos = data;
      console.log(data[0].name);
      console.log(data[0].description);
      console.log(data[0].language);
      console.log(data[0].updated_at);
      console.log(data[0].url);
    })
  }

}
