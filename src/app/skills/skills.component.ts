import { Component, OnInit } from '@angular/core';
import { BackApiService } from '../back-api.service';
import * as rxjs from 'rxjs';
import { of } from 'rxjs';
import { map, filter } from 'rxjs/operators';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  skills;
  utilise;
  voir;

  constructor(private backapiService: BackApiService) { }

  ngOnInit(): void {
    this.backapiService.getSkills().subscribe((data)=>{
      this.skills = data;

        this.utilise = this.skills.filter(function(skill){
          return skill.categorie === "Utilise";
        })
        
        this.voir = this.skills.filter(function(skill){
          return skill.categorie !== "Utilise";
        })
    })
  }

}
