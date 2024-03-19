import { Injectable } from '@angular/core';
import * as Stomp from 'stompjs';
import SockJS from 'sockjs-client';
import { BehaviorSubject } from 'rxjs';
import { BsLichkhamComponent } from 'app/bs-lichkham/bs-lichkham.component';
@Injectable({
  providedIn: 'root'
})
export class WebSocketAPI {
  endPoint: string = 'http://localhost:8080/ws';
  topic: string = '/topic/data';
  private stompClient: any;
  public dataRe: string = '';
  bslkComponent!: BsLichkhamComponent;

  constructor() {
  
  }

  public connect() {
    let socket = new SockJS(this.endPoint);
    this.stompClient = Stomp.over(socket);
    this.stompClient.connect({}, () => {
      this.stompClient.subscribe(this.topic, (message: { body: string; }) => {
        this.dataRe = message.body;
      });
    }, this.errorCallBack);
  }

   // on error, schedule a reconnection attempt
   errorCallBack(error: string) {
    console.log("errorCallBack -> " + error)
    setTimeout(() => {
        this.connect();
    }, 5000);
}
}
