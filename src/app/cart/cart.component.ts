import { Component } from '@angular/core';
import { OrderingService } from '../ordering.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  arr:any[]=[];
  img:any[]=[];
  title:any[]=[];
  amount:any[]=[];
  constructor(private list:OrderingService){
  this.arr=list.img;
  this.img=list.img;
  this.amount=list.Amount;
  this.title=list.title;
  }
  con(){

  // let a=document.getElementById('temp') as HTMLElement;
  // a.innerHTML=" "+this.list.title+" "+this.list.Amount;
  // let i=document.getElementById("image") as HTMLImageElement;
  // i.src=this.list.img[0];
  // console.log(this.list.img);
  }
}
