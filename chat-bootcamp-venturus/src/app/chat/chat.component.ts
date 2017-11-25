import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ChatService } from './chat.service';
import { AfterViewChecked, AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements AfterViewChecked, AfterViewInit {

  public mensagens: Object[] = [];
  public mensagemInserir: string;

  @ViewChild('scrollMe') private scrollContainer: ElementRef;

  constructor(private _chatService: ChatService) {
    this._chatService.server.on('messages', m => this.mensagens.push(m));
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  ngAfterViewInit() {
    this.scrollToBottom();
  }

  private scrollToBottom(): void {
    this.scrollContainer.nativeElement.scrollTop = this.scrollContainer.nativeElement.scrollHeight;
  }

  public enviaMensagem() {

    let obj = { message: this.mensagemInserir, author: this._chatService.nomeUsuario };
    this._chatService.server.emit('messages', obj);
    this.mensagemInserir = '';
  }
}
