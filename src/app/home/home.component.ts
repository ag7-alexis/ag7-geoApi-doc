import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  JSONresult: JSON;

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.pingApi();
  }

  pingApi() {
    this.api.ping().subscribe();
  }

}
