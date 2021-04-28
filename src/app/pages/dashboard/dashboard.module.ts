import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { Routes, RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

const routes: Routes = [{
  path: '',
  data: {
    title: 'Bethel Dashboard',
    urls: [{ title: 'Dashboard', url: '/' }, { title: 'Dashboard Page' }],
  },
  component: DashboardComponent
}];

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatGridListModule,
    FlexLayoutModule,
    MatButtonModule,
    MatToolbarModule,
    RouterModule.forChild(routes)
  ],
  providers: []
})
export class DashboardModule { }
