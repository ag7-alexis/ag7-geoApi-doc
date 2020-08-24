import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../shared/token-storage.service';
import { ApiService } from '../shared/api.service';
import { AccountInfo } from './account-info';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  UserInfo: AccountInfo = null;
  isLoad = 0;

  constructor(public tokenService: TokenStorageService, private api: ApiService) { }

  ngOnInit(): void {
    this.getUserInfo();
  }

  private getUserInfo() {
    this.api.getUserInfo(this.tokenService.getUser()).subscribe(
      res => {
        this.UserInfo = res;
        this.isLoad++;
      }
    );
  }

}
