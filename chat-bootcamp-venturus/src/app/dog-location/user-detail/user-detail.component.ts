import { City } from '../../services/model.service';
import { Component, Input, OnChanges, OnInit, Renderer2, ElementRef } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import '../../../../node_modules/baguettebox.js/dist/baguetteBox.min.js';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  public idUser: number;
  public toggleAnimmation: boolean;

  public delay: number;
  public steps: string[];
  public open: boolean;
  public curStep: number;


  constructor(private activatedRoute: ActivatedRoute,
    private renderer: Renderer2,
    private elementRef: ElementRef, ) {
    this.toggleAnimmation = false;

    this.delay = 150;
    this.open = false;
    this.curStep = 0;
    this.steps = [];

    for (let i = 0; i <= 3; i++) {
      this.steps[i] = 'demo__step-' + i;
    }
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.idUser = params['id'];
    });
  }

  public animate() {
    if (this.curStep >= 4) {
      this.curStep = 0;
      return;
    }

    this.open = true;
    this.setStep(this.curStep);
    this.curStep++;
    setTimeout(this.animate, this.delay);
  }

  public setStep(index) {
    console.log(this.renderer)
    this.renderer.removeClass('.demo__buttons', 'step-1 step-0 step-3 step-2');
    this.renderer.addClass('.demo__buttons', 'step-' + this.curStep);

  }

  public testeFunction() {
    this.toggleAnimmation = !this.toggleAnimmation;
    

  }

  /*  end  */

  public teste2() {

    this.open = !this.open;
    /*   if (!this.open) {
        this.animate();
      } else {
        this.renderer.removeClass('.demo__buttons', 'step-1 step-0 step-3 step-2');
        this.open = false;
        this.curStep = 0;
      } */


  }




}
