import { Component, DoCheck, Input, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { City, Dog } from '../../services/model.service';
import { DogService } from '../../services/dog.services';

import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  animations: [
    trigger('captionAnimate', [
      state('inactive', style({
        opacity: 0,
        transition: ' all 0.15s ease-in-out'
      })),
      state('active', style({
        opacity: 1,
        transform: 'translateY(-300px)',
      })),
      transition('inactive => active', animate('600ms ease-in')),
      transition('active => inactive', animate('1000ms ease-out')),
    ])
  ]
})
export class UsersComponent implements OnChanges {

  @Input() city: City;
  public dogs: Array<Dog>;

  public captionStateName: string;
  public isLoading: boolean;
  public isResultComplete: boolean;
  public pageNumber = 1;
  public qtdByPage = 8;

  constructor(
    private router: Router,
    private _dogService: DogService) {
    this.captionStateName = 'inactive';
  }
  ngOnChanges() {
    console.log('ngOnChanges');
    if (this.city) {
      this.dogs = [];
      this.getDogAll(this.pageNumber, this.qtdByPage);
    }
  }

  public userDetail(dog: Dog) {
    this.router.navigate(['/user-detail/' + dog.name, { dogSelected: dog }]);
  }


  public loadMoreDogs() {
    this.pageNumber++;
    this.getDogAll(this.pageNumber, this.qtdByPage);
  }


  private getDogAll(pageNumber: number, qtdByPage: number) {
    this.isLoading = true;
    this._dogService.getDogAll(pageNumber, qtdByPage)
      .subscribe(res => {
        if (res.length !== 0) {
          this.dogs = this.dogs ? this.dogs.concat(res) : res;
        } else {
          this.isResultComplete = true;
        }
        this.isLoading = false;
      });
  }

}
