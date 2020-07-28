import { Component, OnInit } from '@angular/core';
import { BackApiService } from '../back-api.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  schools;

  constructor(private backapiService: BackApiService) { }

  ngOnInit(): void {
    // this.backapiService.getSchool().subscribe((data)=>{
    //   this.schools = data;
    //   console.log(this.schools);
    // })

    this.backapiService.getSchool()
      .subscribe(data => this.schools = data);
  }

}
