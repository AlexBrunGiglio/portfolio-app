import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BackApiService } from '../back-api.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  template: `
  `
})
export class ContactComponent implements OnInit {

  mail;
  mailForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    msg: new FormControl('', [Validators.required]),
  });

  constructor(private backapiService: BackApiService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.log(this.mailForm.value);
  }

  createMail(mail) {
    mail = this.mailForm.value;
    this.backapiService.postMail(mail).subscribe((res) => {
      window.location.href = 'contact';
    });
  }

}
