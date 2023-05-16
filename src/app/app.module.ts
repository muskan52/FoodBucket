import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import{Routes,RouterModule}from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AnotherComponent } from './another/another.component';
import { Another1Component } from './another1/another1.component';
import { Another2Component } from './another2/another2.component';
import { Another3Component } from './another3/another3.component';
import { LogComponent } from './log/log.component';
import { CartComponent } from './cart/cart.component';
import { OrderingService } from './ordering.service';



const ap: Routes=[
  {path:"home" ,component: HomeComponent },
  {path:"login", component: RegisterComponent },
  {path:"register", component: LoginComponent },
  {path:"another", component: AnotherComponent},
  {path:"another1", component: Another1Component},
  {path:"another2", component: Another2Component},
  {path:"another3", component: Another3Component},
  {path:"log", component: LogComponent},
  {path:"cart", component: CartComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    AnotherComponent,
    Another1Component,
    Another2Component,
    Another3Component,
    LogComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    RouterModule.forRoot(ap),
    
  ],
  providers: [OrderingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
