import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {
  isUserLoggedIn = false;
  navLinks: any[];
  activeLinkIndex = -1;

  constructor(public router: Router) {
    this.navLinks = [
      {
        label: 'Fill Attendence',
        link: './timesheet',
        index: 0
      },
      {
        label: 'Apply Leaves',
        link: './leaves',
        index: 1
      },
      {
        label: 'My Dashboard',
        link: './dashboard',
        index: 2
      }, 
    ];
  }

  ngOnInit(): void {
    this.getLoggedInuser();
    this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
    });
  }
  getLoggedInuser() {
    if (localStorage.getItem('user') !== null) {
      this.isUserLoggedIn = true;
      this.router.navigate(['/dashboard']);
    } else
      this.router.navigate(['/login']);
  }

}
