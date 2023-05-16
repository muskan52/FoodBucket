import { Injectable } from '@angular/core';
import { CartComponent } from './cart/cart.component';

@Injectable({
  providedIn: 'root'
})
export class OrderingService {
   img:any[]=[];
       title:any[]=[];
       Amount:any[]=[]
constructor(){

}
  cart(a:any,b:any,c:any){
    this.img.push(a);
    this.title.push(b);
    this.Amount.push(c);

  }
  
}
