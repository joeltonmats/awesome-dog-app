import { Component, ElementRef, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import * as Typed from 'typed.js';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterViewInit {

  public typed: Typed;

  constructor(private elRef: ElementRef) {
  }

  ngAfterViewInit() {
    this.typed = new Typed(this.elRef.nativeElement.querySelector('.element'),
      {
        strings: ['Like, Love beautiful pictures.', 'Discover cute dogs.', 'We Love dogs.', 'Amazing dogs near you.',
          'Share with the world.'],
        typeSpeed: 60,
        backSpeed: 40,
        loop: true,
      });
  }

  ngOnInit() {
  }

}
