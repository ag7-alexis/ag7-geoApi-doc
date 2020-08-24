import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../shared/token-storage.service';
import { LogoutDialogComponent } from '../dialog/logout-dialog/logout-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  navMobileIsOpen = false;

  constructor(public tokenService: TokenStorageService, private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  dialogLogOut() {
    const dialogRef = this.dialog.open(LogoutDialogComponent, {
      width: '30rem'
    });
    dialogRef.afterClosed().subscribe(res => {
    }
    );
  }

  closeNavMobile() {
    if (this.navMobileIsOpen == true) {
      this.navMobileIsOpen = !this.navMobileIsOpen;
      document.getElementById('navbarColor01').style.display = 'none';
    }
  }

  getNavMobile() {
    if (this.navMobileIsOpen == true) {
      document.getElementById('navbarColor01').style.display = 'none';
    } else {
      document.getElementById('navbarColor01').style.display = 'block';
    }
    this.navMobileIsOpen = !this.navMobileIsOpen;
  }

}
