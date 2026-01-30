import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  constructor() { }
  show(){
    console.log("loader shown");
  }
  hide(){
    console.log("loader hidden");
  }
}
