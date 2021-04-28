import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';

const routes: Routes = [
    {
        path: '', component: PagesComponent,
        children: [
            { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
            { path: 'leaves', loadChildren: () => import('./leaves/leaves.module').then(m => m.LeavesModule) },
            { path: 'timesheet', loadChildren: () => import('./timesheet/timesheet.module').then(m => m.TimesheetModule) }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule { }
