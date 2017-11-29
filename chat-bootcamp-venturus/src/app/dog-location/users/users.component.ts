import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { City } from "../../services/model.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit, OnChanges {

  @Input() city: City;

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  public userDetail(id) {
    this.router.navigate(['/user-detail/' + id])
  }


  ngOnChanges() {
    //to-do: subscribe users by city
    throw new Error("Method not implemented.");
  }

  public viewDetails() {
    this.router.navigate(['/user-detail/2'])
  }

}
