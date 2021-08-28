import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'contacts-store';
  flag = true;
  contactList = [];
  selectedContact = null;

  constructor() {
  }

  ngOnInit(): void {
    if (localStorage.getItem('all')) {
      this.contactList = JSON.parse(localStorage.getItem('all'));
    }
    this.resetSelectedContact();
  }

  ngOnDestroy() {
    localStorage.clear();
  }

  resetSelectedContact() {
    this.selectedContact = {
      id: null,
      name: "",
      phNum: null,
      email: ""
    };
  }

  setFlag() {
    this.flag = false;
  }

  saveContact() {
    if (this.contactList[this.contactList.length] == undefined || this.contactList[this.contactList.length].id === null) {
      this.selectedContact.id = Number(this.contactList.length) + 1;
    } else {
      this.selectedContact.id += 1;
    }
    this.contactList.push(this.selectedContact);
    localStorage.setItem('all', JSON.stringify(this.contactList));
    this.resetSelectedContact();
    this.flag = true;
  }


  cancel() {
    this.resetSelectedContact();
    this.flag = true;
  }
}
