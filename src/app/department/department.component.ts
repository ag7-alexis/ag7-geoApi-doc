import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  nomRegion: string = "Provence-Alpes-Côte d'Azur"

  paramDepartment: string = "26"

  urlDepartment: string = "https://api-ag7-geo.herokuapp.com\\public/api/department" + this.paramDepartment;

  infoDepartmentIsActive = false;

  regionDepartmentIsActive = true;

  urlDepartmentByRegion: string = "https://api-ag7-geo.herokuapp.com\\public/api/department/" + this.nomRegion + "/region";

  infoDepartmentByRegionIsActive = true;

  regionDepartmentByRegionIsActive = false;

  urlActive = this.urlDepartment;

  result: JSON;


  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.callApi();
  }


  callApi() {
    let url = "";
    if (this.urlActive === this.urlDepartment) {
      url = "https://api-ag7-geo.herokuapp.com\\public/api/department/" + this.paramDepartment;
      if (this.infoDepartmentIsActive == false && this.regionDepartmentIsActive == true) {
        url += "?noInfo";
      } else if (this.infoDepartmentIsActive == true && this.regionDepartmentIsActive == false) {
        url += "?noRegion";
      } else if (this.infoDepartmentIsActive == false && this.regionDepartmentIsActive == false) {
        url += "?noRegion&noInfo";
      }
      this.urlDepartment = url;
      this.urlActive = url;
    } else {
      url = "https://api-ag7-geo.herokuapp.com\\public/api/department/" + this.nomRegion + "/region";
      if (this.infoDepartmentByRegionIsActive == false && this.regionDepartmentByRegionIsActive == true) {
        url += "?noInfo";
      } else if (this.infoDepartmentByRegionIsActive == true && this.regionDepartmentByRegionIsActive == false) {
        url += "?noRegion";
      } else if (this.infoDepartmentByRegionIsActive == false && this.regionDepartmentByRegionIsActive == false) {
        url += "?noRegion&noInfo";
      }
      this.urlDepartmentByRegion = url;
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
      this.urlActive = this.urlDepartment;
    } else {
      document.getElementById("departmentByRegion").classList.replace("btn-secondary", "btn-primary");
      document.getElementById("department").classList.replace("btn-primary", "btn-secondary");
      document.getElementById("div-departmentByRegion").style.display = "flex";
      document.getElementById("div-department").style.display = "none";
      this.urlActive = this.urlDepartmentByRegion;
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
