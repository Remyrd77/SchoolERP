import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth-service';
import { User, User1 } from '../../shared/models/user';
import { map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  usersData: any;
  userData$: Observable<any>;
  userUID: any;
  user: any
  constructor(private userService: AuthService) {
    this.user = this.userService.getLoggedInUserInfo();
  }

  ngOnInit(): void {
    this.userService.setUserIdInLocalStorage();
    this.getUserData();
  }

  getUserData() {
    this.userService.getUserData().pipe(
      tap(res => {
        if (res)
          this.usersData = res;
      })
    ).subscribe(res => {
      if (res) {
        res.forEach(val => {
          if (val.email === this.user.email) {
            this.userData$ = of([val]);
          }
        });
      }
    });
  }


}
