import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-status-monitor',
  templateUrl: './status-monitor.component.html',
  styleUrls: ['./status-monitor.component.css']
})
export class StatusMonitorComponent implements OnInit {
  lockStatus: Observable<any> | undefined;
  movementStatus: Observable<any> | undefined;

  constructor(private db: AngularFireDatabase) { }

  ngOnInit() {
    this.lockStatus = this.db.object('Lock').valueChanges();
    this.movementStatus = this.db.object('Movement').valueChanges();
  }
}
