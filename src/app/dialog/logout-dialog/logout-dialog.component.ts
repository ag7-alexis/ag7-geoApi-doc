import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { TokenStorageService } from '../../shared/token-storage.service'

@Component({
  selector: 'app-logout-dialog',
  templateUrl: './logout-dialog.component.html',
  styleUrls: ['./logout-dialog.component.css']
})
export class LogoutDialogComponent {

  constructor(public tokenService: TokenStorageService, public route: Router, public dialog: MatDialogRef<LogoutDialogComponent>) { }

  signOut() {
    this.tokenService.signOut();
    this.route.navigateByUrl('/home');
    this.dialog.close();
  }
}
