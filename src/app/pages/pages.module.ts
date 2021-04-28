import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { AuthService } from '../shared/services/auth-service';
import { MatTabsModule } from '@angular/material/tabs';



@NgModule({
  declarations: [
    PagesComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    MatTabsModule,
  ],
  providers: [AuthService]
})
export class PagesModule { }
