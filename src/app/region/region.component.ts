import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css']
})
export class RegionComponent implements OnInit {

  nomRegion: string = "Provence-Alpes-Côte d'Azur"

  urlAllRegion: string = "https://api-ag7-geo.herokuapp.com\\public/api/region";

  infoAllRegionIsActive = false;

  urlRegion: string = "https://api-ag7-geo.herokuapp.com\\public/api/region/" + this.nomRegion;

  infoRegionIsActive = true;

  urlActive = this.urlAllRegion;

  result: JSON;


  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.callApi();
    //console.log(this.result);
  }


  callApi() {
    let url = "";
    if (this.urlActive === this.urlAllRegion) {
      url = "https://api-ag7-geo.herokuapp.com\\public/api/region";
      if (this.infoAllRegionIsActive == false) {
        url += "?noInfo";
      }
      this.urlAllRegion = url;
      this.urlActive = url;
    } else {
      url = "https://api-ag7-geo.herokuapp.com\\public/api/region/" + this.nomRegion;
      if (this.infoRegionIsActive == true) {
        this.urlRegion = url.replace("?noInfo", "");
        url = this.urlRegion;
        this.urlActive = this.urlRegion;
      } else {
        url += "?noInfo";
        this.urlRegion = url;
        this.urlActive = url;
      }
    }
    this.apiService.callAPI(url).subscribe(
      res => {
        this.result = res;
      }
    );
  }

  switchUrl(id: string) {
    if (id == 'region') {
      document.getElementById("region").classList.replace("btn-secondary", "btn-primary");
      document.getElementById("allRegion").classList.replace("btn-primary", "btn-secondary");
      document.getElementById("div-region").style.display = "block";
      document.getElementById("div-allRegion").style.display = "none";
      this.urlActive = this.urlRegion;
    } else {
      document.getElementById("allRegion").classList.replace("btn-secondary", "btn-primary");
      document.getElementById("region").classList.replace("btn-primary", "btn-secondary");
      document.getElementById("div-allRegion").style.display = "block";
      document.getElementById("div-region").style.display = "none";
      this.urlActive = this.urlAllRegion;
    }
    this.callApi();
  }


  getDrop(id: string) {
    if (document.getElementById("div-" + id).style.display != "block") {
      document.getElementById("div-" + id).style.display = "block";
      document.getElementById("i-" + id).classList.replace("fa-angle-down", "fa-angle-up");
    } else {
      document.getElementById("div-" + id).style.display = "none";
      document.getElementById("i-" + id).classList.replace("fa-angle-up", "fa-angle-down");
    }
  }


  scrollTo(el: HTMLElement) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}
