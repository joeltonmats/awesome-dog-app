import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { ChatService } from './chat.service';
import { AfterViewChecked, AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { CountryService } from '../services/country.service';
import { CityMarker } from '../services/model.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements AfterViewInit, AfterViewChecked {

  public mensagens: Object[] = [];
  public mensagemInserir: string;

  public canCloseDialog: boolean;
  public mapStyle: Array<any>;
  public cityMarkers: Array<CityMarker>;

  @Input() owner: string;

  public messageResponses: Array<string> = [
    'Why did the web developer leave the restaurant? Because of the table layout.',
    'How do you comfort a JavaScript bug? You console it.',
    'An SQL query enters a bar, approaches two tables and asks: "May I join you?"',
    'What is the most used language in programming? Profanity.',
    'What is the object-oriented way to become wealthy? Inheritance.',
    'An SEO expert walks into a bar, bars, pub, tavern, public house, Irish pub, drinks, beer, alcohol'
  ];



  @ViewChild('scrollMe') private scrollContainer: ElementRef;

  constructor(private _chatService: ChatService, private elementRef: ElementRef) { }

  ngAfterViewInit() {
    this.scrollToBottom();
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  private scrollToBottom(): void {
    if (this.scrollContainer) {
      console.log(this.scrollContainer);
      this.scrollContainer.nativeElement.scrollTop = this.scrollContainer.nativeElement.scrollHeight;
    }
  }

  public enviaMensagem(event: any) {

    const objTyped = { message: event.target.value, author: this._chatService.nomeUsuario };
    const objRes = { message: this.getRandomItem(this.messageResponses), author: 'Unknowkn' };

    this.mensagens.push(objTyped);
    this.mensagens.push(objRes);

    this.mensagemInserir = '';
    event.target.value = null;

    this.scrollToBottom();
  }

  private getRandomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  public closeDialog() {
    this.canCloseDialog = !this.canCloseDialog;
  }
}
