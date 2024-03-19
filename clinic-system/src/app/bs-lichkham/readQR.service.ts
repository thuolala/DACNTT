import { Injectable } from '@angular/core';
import { Serial } from '@ionic-native/serial/ngx';

@Injectable({
  providedIn: 'root'
})
export class BarcodeService {

  constructor(private serial: Serial) { }

  getData() {
    return this.serial.open({
        baudRate: 9600,
        dataBits: 8,
        parity: 0,
        stopBits: 1,
        dtr: false,
        rts: false,
        sleepOnPause: false
    }).then((serial: Serial) => {
        serial.read().then((data: string) => {
            console.log(data);
          });
    });
  }
}
