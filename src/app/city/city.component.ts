import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {
  paramDepartment: string = "07"

  paramCity: string = "Paris"

  urlCity: string = "https://api-ag7-geo.herokuapp.com\\public/api/city" + this.paramCity;

  infoCityIsActive = false;

  depCityIsActive = false;

  regionCityIsActive = true;

  urlCityByDep: string = "https://api-ag7-geo.herokuapp.com\\public/api/city/" + this.paramDepartment + "/department";

  infoCityByDepIsActive = true;

  depCityByDepIsActive = true;

  regionCityByDepIsActive = false;

  urlActive = this.urlCity;

  result: JSON;


  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.callApi();
  }


  callApi() {
    let url = "";
    if (this.urlActive === this.urlCity) {
      url = "https://api-ag7-geo.herokuapp.com\\public/api/city/" + this.paramCity;
      if (this.infoCityIsActive == false && this.regionCityIsActive == true && this.depCityIsActive == true) {
        url += "?noInfo";
      } else if (this.infoCityIsActive == true && this.regionCityIsActive == false && this.depCityIsActive == true) {
        url += "?noRegion";
      } else if (this.infoCityIsActive == false && this.regionCityIsActive == false && this.depCityIsActive == true) {
        url += "?noRegion&noInfo";
      } else if (this.infoCityIsActive == true && this.depCityIsActive == false) {
        url += "?noDepartment"
      } else if (this.infoCityIsActive == false && this.depCityIsActive == false) {
        url += "?noInfo&noDepartment"
      }
      this.urlCity = url;
      this.urlActive = url;
    } else {
      url = "https://api-ag7-geo.herokuapp.com\\public/api/city/" + this.paramDepartment + "/department";
      if (this.infoCityByDepIsActive == false && this.regionCityByDepIsActive == true && this.depCityByDepIsActive == true) {
        url += "?noInfo";
      } else if (this.infoCityByDepIsActive == true && this.regionCityByDepIsActive == false && this.depCityByDepIsActive == true) {
        url += "?noRegion";
      } else if (this.infoCityByDepIsActive == false && this.regionCityByDepIsActive == false && this.depCityByDepIsActive == true) {
        url += "?noRegion&noInfo";
      } else if (this.infoCityByDepIsActive == true && this.depCityByDepIsActive == false) {
        url += "?noDepartment"
      } else if (this.infoCityByDepIsActive == false && this.depCityByDepIsActive == false) {
        url += "?noInfo&noDepartment"
      }
      this.urlCityByDep = url;
      this.urlActive = url;
    }
    this.apiService.callAPI(url).subscribe(
      res => {
        this.result = res;
      }
    );
  }

  switchUrl(id: string) {
    if (id == 'department') {
      document.getElementById("department").classList.replace("btn-secondary", "btn-primary");
      document.getElementById("departmentByRegion").classList.replace("btn-primary", "btn-secondary");
      document.getElementById("div-department").style.display = "flex";
      document.getElementById("div-departmentByRegion").style.display = "none";
      this.urlActive = this.urlCity;
    } else {
      document.getElementById("departmentByRegion").classList.replace("btn-secondary", "btn-primary");
      document.getElementById("department").classList.replace("btn-primary", "btn-secondary");
      document.getElementById("div-departmentByRegion").style.display = "flex";
      document.getElementById("div-department").style.display = "none";
      this.urlActive = this.urlCityByDep;
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
