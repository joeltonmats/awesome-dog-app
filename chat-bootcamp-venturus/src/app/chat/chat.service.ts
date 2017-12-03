import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';

@Injectable()
export class ChatService {

  private usuario = 'Notleoj';
  private logTime: Date;
  private serverUrl = 'http://172.24.30.24:3000'; //'http://bootcamp.us-east-1.elasticbeanstalk.com/';
  public server: any;

  get nomeUsuario(): string {
    return this.usuario;
  }

  get loggedTime(): Date {
    return this.logTime;
  }

  constructor() {
 /*   if (!sessionStorage.getItem('nome')) {
      this.usuario = prompt('qual seu nome ?');
    } else {
      this.usuario = sessionStorage.getItem('nome');
      this.logTime = new Date(sessionStorage.getItem('logTime'));
    }

    this.logTime = new Date();
    sessionStorage.setItem('nome', this.usuario);

    this.server = io(this.serverUrl);*/
  }

}
