import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-view-employees',
  templateUrl: './view-employees.component.html',
  styleUrls: ['./view-employees.component.css']
})
export class ViewEmployeesComponent implements OnInit {
  employees: Observable<any[]> | undefined;

  constructor(private db: AngularFireDatabase, private storage: AngularFireStorage) { }

  ngOnInit() {
    this.employees = this.db.list('employees').snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() as {} }))
      )
    );
  }

  deleteEmployee(employee: any) {
    // Confirm deletion with the user
    if (!confirm('Are you sure you want to delete this employee?')) {
      return;
    }

    // Delete the photo from Firebase Storage if URL exists
    if (employee.photoUrl) {
      this.storage.refFromURL(employee.photoUrl).delete()
        .subscribe(
          () => console.log('Photo deleted successfully'),
          error => console.error('Error deleting photo', error)
        );
    }

    // Delete the employee record from Firebase Realtime Database
    this.db.list('employees').remove(employee.key)
      .then(() => console.log('Employee deleted successfully'))
      .catch(error => console.error('Error deleting employee', error));
  }
}
