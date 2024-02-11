import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {CreateEmployeeComponent} from "./create-employee/create-employee.component";
import {ViewEmployeesComponent} from "./view-employees/view-employees.component";
import {StatusMonitorComponent} from "./status-monitor/status-monitor.component";
import {LiveFeedComponent} from "./live-feed/live-feed.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'create-employee', component: CreateEmployeeComponent },
  { path: 'view-employees', component: ViewEmployeesComponent },
  { path: 'status-monitor', component: StatusMonitorComponent },
  { path: 'live-feed', component: LiveFeedComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
