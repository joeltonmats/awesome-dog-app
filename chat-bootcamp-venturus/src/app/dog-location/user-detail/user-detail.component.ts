import { City } from '../../services/model.service';
import { Component, ElementRef, Input, OnChanges, OnInit, Renderer2, ViewContainerRef } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import '../../../../node_modules/baguettebox.js/dist/baguetteBox.min.js';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  public idUser: number;
  public optionsClass: any;
  public qtdClick: number = 0;
  public levelUpClicker: any;


  public toggleAnimmation: boolean;

  public delay: number;
  public steps: string[];
  public open: boolean;
  public curStep: number;



  constructor(private activatedRoute: ActivatedRoute,
    private renderer: Renderer2,
    private elementRef: ElementRef,
    public toastr: ToastsManager, vcr: ViewContainerRef) {

    this.toastr.setRootViewContainerRef(vcr);

    this.optionsClass = {};
    this.optionsClass.likeClass = "fa-thumbs-o-up";
    this.optionsClass.loveClass = "fa-heart-o";

    this.levelUpClicker = {};

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

  public myVote(type, optionClassSelected) {

    if (type == 'love') {
      if (optionClassSelected === 'fa-heart')
        this.optionsClass.loveClass = "fa-heart-o";
      else
        this.optionsClass.loveClass = "fa-heart";
    }

    if (type == 'like') {
      if (optionClassSelected === 'fa-thumbs-up')
        this.optionsClass.likeClass = "fa-thumbs-o-up";
      else
        this.optionsClass.likeClass = "fa-thumbs-up";
    }


  }

  public increaseQtdClick() {
    this.qtdClick++;
    this.getLevelClicker();
    this.showCustom();
  }

  public resetClick() {
    this.qtdClick = 0;
    this.getLevelClicker();
  }

  private getLevelClicker() {
    this.levelUpClicker = {
      'clicker-level-medium': this.qtdClick > 10,
      'clicker-level-professional': this.qtdClick > 50,
      'clicker-level-lord': this.qtdClick > 80,
      'clicker-level-king': this.qtdClick > 150,
      'clicker-level-legend': this.qtdClick > 250,
      'clicker-level-finish': this.qtdClick > 400
    };
  }

  private showCustom() {
    let message = '';
    let color = '';

    if (this.qtdClick == 11) {
      message = 'Average';
      color = 'background: linear-gradient(to right, #fdeff9, #ec38bc, #7303c0, #03001e);';
    } else if (this.qtdClick == 51) {
      message = 'Professional';
      color = 'background: linear-gradient(to right, #3a7bd5, #00d2ff);';
    } else if (this.qtdClick == 81) {
      message = 'Lord';
      color = '  background: linear-gradient(to right, #AA3A38, #2F7336);';
    } else if (this.qtdClick == 151) {
      message = 'King';
      color = 'background: linear-gradient(to right, #f80759, #bc4e9c);';
    } else if (this.qtdClick == 251) {
      message = 'Legend';
      color = 'background: linear-gradient(to right, #F0CB35, #C02425);';
    } else if (this.qtdClick > 400) {
      message = 'You can stop. You Are Awesome.';
      color = 'background: linear-gradient(to right, #434343, #000000);';
    }

    if (message.length > 0) {
      this.toastr.success(`<span style="${color}">${message}</span> .`, null, { enableHTML: true });
    }
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
