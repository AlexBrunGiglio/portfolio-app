import { Component, OnInit } from '@angular/core';
import { BackApiService } from '../back-api.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  schools;
  pros;
  exp;

  constructor(private backapiService: BackApiService) { }

  ngOnInit(): void {
    this.backapiService.getSchool().subscribe((data) => {
      this.schools = data;
      
      this.pros = this.schools.filter(function(skill){
        return skill.categorie === "Professionnelle";
      })
      
      this.exp = this.schools.filter(function(skill){
        return skill.categorie !== "Professionnelle";
      })
    })
  }
}
