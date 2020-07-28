import { Component, OnInit } from '@angular/core';
import { BackApiService } from '../back-api.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  infos;

  constructor( private backapiService: BackApiService ) { }

  ngOnInit(): void {
    this.backapiService.getInfos().subscribe((data)=>{
      this.infos = data;
    })
  }

}
