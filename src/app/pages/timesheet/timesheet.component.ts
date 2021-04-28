import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/services/user-service';
import { AuthService } from '../../shared/services/auth-service';

@Component({
  selector: 'app-timesheet',
  templateUrl: './timesheet.component.html',
  styleUrls: ['./timesheet.component.scss']
})
export class TimesheetComponent implements OnInit {

  constructor(private authSer: AuthService) { }

  ngOnInit(): void {

  }

  fillTimeSheet() {
    // this.authSer.applyLeave(this.authSer.getUserIdFromLocal(), null, null);
  }

  fillAttendence(event) {
    let time = this.authSer.getFireStoreTime(event.value);
    this.authSer.applyLeave(this.authSer.getUserIdFromLocal(), 'todaysDate', time);
  }

  changeEvent(event) {

  }

}
