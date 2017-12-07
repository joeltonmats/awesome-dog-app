import { Injectable } from '@angular/core';

@Injectable()
export class ChatService {

  private usuario = 'Joelton';
  public server: any;

  get nomeUsuario(): string {
    return this.usuario;
  }

  constructor() { }

}
