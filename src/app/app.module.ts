import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { environment } from '../environments/environment';
import {AngularFireStorageModule} from "@angular/fire/compat/storage";
import { ViewEmployeesComponent } from './view-employees/view-employees.component';
import { StatusMonitorComponent } from './status-monitor/status-monitor.component';
import { LiveFeedComponent } from './live-feed/live-feed.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateEmployeeComponent,
    ViewEmployeesComponent,
    StatusMonitorComponent,
    LiveFeedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireStorageModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
