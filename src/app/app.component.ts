import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'SchoolERP';
  isUserLoggedIn = false;
  constructor(public router: Router) { }

  ngOnInit(): void {
    this.getLoggedInuser();
  }
  getLoggedInuser() {
    if (localStorage.getItem('user') !== null) {
      this.isUserLoggedIn = true;
      this.router.navigate(['/dashboard']);
    } else
      this.router.navigate(['/login']);
  }
}
