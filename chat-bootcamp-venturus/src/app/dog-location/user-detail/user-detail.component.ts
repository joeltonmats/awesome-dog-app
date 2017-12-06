import {
  Component, ElementRef, Input, OnChanges, OnInit, Renderer2, ViewContainerRef,
  ViewChild, AfterViewChecked, AfterViewInit
} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import '../../../../node_modules/baguettebox.js/dist/baguetteBox.min.js';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { DogService } from '../../services/dog.services';
import { ChatService } from '../../chat/chat.service';
import { City, Dog, DogPicture } from '../../services/model.service';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit, AfterViewChecked, AfterViewInit {

  public idUser: number;
  public optionsClass: any;
  public qtdClick: number;
  public levelUpClicker: any;

  public dogSelected: Dog;
  public dogImages: Array<NgxGalleryImage>;

  public toggleAnimmation: boolean;

  public delay: number;
  public steps: string[];
  public curStep: number;

  public mensagens: Object[] = [];
  public mensagemInserir: string;

  public messageResponses: Array<string> = [
    'Why did the web developer leave the restaurant? Because of the table layout.',
    'How do you comfort a JavaScript bug? You console it.',
    'An SQL query enters a bar, approaches two tables and asks: "May I join you?"',
    'What is the most used language in programming? Profanity.',
    'What is the object-oriented way to become wealthy? Inheritance.',
    'An SEO expert walks into a bar, bars, pub, tavern, public house, Irish pub, drinks, beer, alcohol'
  ];

  public galleryOptions: NgxGalleryOptions[];
  public galleryImages: NgxGalleryImage[];

  @ViewChild('scrollMe') private scrollContainer: ElementRef;

  constructor(
    private activatedRoute: ActivatedRoute,
    private renderer: Renderer2,
    private router: Router,
    private elementRef: ElementRef,
    public toastr: ToastsManager, vcr: ViewContainerRef,
    private dogService: DogService,
    private _chatService: ChatService,
    private _location: Location) {

    this.toastr.setRootViewContainerRef(vcr);

    this.optionsClass = {};
    this.optionsClass.likeClass = 'fa-thumbs-o-up';
    this.optionsClass.loveClass = 'fa-heart-o';

    this.levelUpClicker = {};

    this.toggleAnimmation = false;

    this.qtdClick = 0;




    /*  this._chatService.server.on('messages', m => this.mensagens.push(m)); */
    // this.mapStyle = this.getMapStyle();


  }

  ngOnInit() {

    this.galleryOptions = [
      {
        width: '600px',
        height: '400px',
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide
      },
      // max-width 800
      {
        breakpoint: 800,
        width: '100%',
        height: '600px',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20
      },
      // max-width 400
      {
        breakpoint: 400,
        preview: false
      }
    ];

    this.activatedRoute.params.subscribe((params: Params) => {
      this.dogService.getDogByName(params.id)
        .subscribe(res => {
          this.dogSelected = res[0];
          this.dogImages = this.definePictures(res[0].pictureObject.pictures);
        }, err => {
          console.log(err);
        });
    });
  }

  public testeFunction() {
    this.toggleAnimmation = !this.toggleAnimmation;


  }

  public myVote(type, optionClassSelected) {

    if (type === 'love') {
      if (optionClassSelected === 'fa-heart') {
        this.optionsClass.loveClass = 'fa-heart-o';
      } else {
        this.optionsClass.loveClass = 'fa-heart';
      }
    }

    if (type === 'like') {
      if (optionClassSelected === 'fa-thumbs-up') {
        this.optionsClass.likeClass = 'fa-thumbs-o-up';
      } else {
        this.optionsClass.likeClass = 'fa-thumbs-up';
      }
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

    if (this.qtdClick === 11) {
      message = 'Average';
      color = 'background: linear-gradient(to right, #fdeff9, #ec38bc, #7303c0, #03001e);';
    } else if (this.qtdClick === 51) {
      message = 'Professional';
      color = 'background: linear-gradient(to right, #3a7bd5, #00d2ff);';
    } else if (this.qtdClick === 81) {
      message = 'Lord';
      color = '  background: linear-gradient(to right, #AA3A38, #2F7336);';
    } else if (this.qtdClick === 151) {
      message = 'King';
      color = 'background: linear-gradient(to right, #f80759, #bc4e9c);';
    } else if (this.qtdClick === 251) {
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

  ngAfterViewChecked() {
    // this.scrollToBottom();
  }

  ngAfterViewInit() {
    //this.scrollToBottom();
  }

  private scrollToBottom(): void {
    this.scrollContainer.nativeElement.scrollTop = this.scrollContainer.nativeElement.scrollHeight;
  }

  public enviaMensagem(event: any) {

    console.log('entrou', event.target.value);

    const obj = { message: event.target.value, author: this._chatService.nomeUsuario };
    this._chatService.server.emit('messages', obj);

    const objRes = { message: this.getRandomItem(this.messageResponses), author: 'Unknowkn' };
    this._chatService.server.emit('messages', objRes);

    this.mensagemInserir = '';
    event.target.value = null;
  }

  private getRandomItem(arr) {
    console.log('arrrrrrrrrr', arr);
    return arr[Math.floor(Math.random() * arr.length)];
  }

  private definePictures(images): Array<NgxGalleryImage> {
    console.log('images', images);
    const arrayImage = [];

    images.forEach(element => {
      console.log('url', element.url);
      const img = {};
      img['small'] = element.url;
      img['medium'] = element.url;
      img['big'] = element.url;
      img['description'] = element.label;

      arrayImage.push(img);
    });
    return arrayImage;
  }

  /* view-controller */

  public previousPage() {
    this._location.back();
  }



  /* private methods */

}
