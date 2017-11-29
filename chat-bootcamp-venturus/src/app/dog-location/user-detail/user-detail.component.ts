import { City } from '../../services/model.service';
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import '../../../../node_modules/baguettebox.js/dist/baguetteBox.min.js';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  public idUser: number;


  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.idUser = params['id'];
    });
  }


}
