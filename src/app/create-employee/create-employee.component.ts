import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import {AngularFireStorage} from "@angular/fire/compat/storage";
import {finalize} from "rxjs";

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent {

  selectedFile: File | null = null;
  constructor(private db: AngularFireDatabase, private storage: AngularFireStorage) { }

  onFileSelected(event: any) {
    if (event.target.files && event.target.files[0]) {
      this.selectedFile = event.target.files[0];
    }
  }

  onSubmit(form: any) {
    if (this.selectedFile) {
      const filePath = `employee_photos/${this.selectedFile.name}`;
      const fileRef = this.storage.ref(filePath);
      const task = this.storage.upload(filePath, this.selectedFile);

      task.snapshotChanges().pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe(url => {
            const employeeData = { ...form.value, photoUrl: url };
            this.db.list('employees').push(employeeData)
              .then(() => console.log('Employee data with photo saved successfully!'))
              .catch(error => console.error('Error saving employee data', error));
          });
        })
      ).subscribe();
    } else {
      // Handle case where there is no file selected
      this.db.list('employees').push(form.value)
        .then(() => console.log('Employee data saved successfully!'))
        .catch(error => console.error('Error saving employee data', error));
    }
  }
}
