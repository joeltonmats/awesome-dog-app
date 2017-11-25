import { ChatService } from '../chat.service';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-chat-item',
  templateUrl: './chat-item.component.html',
  styleUrls: ['./chat-item.component.css']
})
export class ChatItemComponent {

  @Input() public message: Object;

  constructor(private chatService: ChatService) {
    console.log(this.message);
  }

  public minhaMensagem(): boolean {
    return this.message['author'] === this.chatService.nomeUsuario;
  }

}
