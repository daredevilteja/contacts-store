import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'contacts-store';
  flag = true;
  contactList = [];
  selectedContact = null;

  constructor() {
  }

  ngOnInit(): void {
    this.resetSelectedContact();
  }

  resetSelectedContact() {
    this.selectedContact = {
      name: "",
      phNum: null,
      email: ""
    };
  }

  setFlag() {
    this.flag = false;
  }

  saveContact() {
    this.contactList.push(this.selectedContact);
    this.flag = true;
  }


  cancel() {
    this.resetSelectedContact();
    this.flag = true;
  }
}
