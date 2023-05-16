import { Component } from '@angular/core';
import { OrderingService } from '../ordering.service';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent {
  img:any;
       title:any;
       Amount:any=200;
  constructor(public list:OrderingService){}

 eventhandler(en:Event){
  let e=en.target as HTMLButtonElement;
  let curr:string=<string>e.getAttribute('value');
let image=document.querySelectorAll("."+curr.trim());
let im=image[0] as HTMLImageElement;
let ti=image[1] as HTMLHeadingElement;
this.img=im.src;
this.title=ti.innerHTML;
  console.log(image);
    this.list.cart(this.img,this.title,this.Amount);
  }
   
      }
//   cart(a,b,c){
// document.createElement('div');


//   }
  
  
  


