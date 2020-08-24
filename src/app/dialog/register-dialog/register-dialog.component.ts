import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-register-dialog',
  templateUrl: './register-dialog.component.html',
  styleUrls: ['./register-dialog.component.css']
})
export class RegisterDialogComponent {

  constructor(private dialog: MatDialogRef<RegisterDialogComponent>) { }

  close() {
    this.dialog.close();
  }
}
