import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComunicacionResumenService {

  constructor() { }
  switch1 = false;
  switch2 = false;
  switch3 = false;

  toggleSwitch1() {
    this.switch1 = true;
  }

  toggleSwitch2() {
    this.switch2 = true;
  }

  toggleSwitch3() {
    this.switch3 = true;
  }
}
