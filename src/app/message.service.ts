import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }
  messages:string[] = [];


  add(massages:string){
    this.messages.push(massages);
  }

  clear(){
    this.messages = [];
  }
}
