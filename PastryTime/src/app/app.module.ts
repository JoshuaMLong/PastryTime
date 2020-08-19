import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LayoutComponent } from './layout/layout.component';
import { MaterialModule } from '../material.module';
import { InputTextModule } from 'primeng/inputtext';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CartComponent } from './cart/cart.component';
import { CartService } from './services/cart-service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    SidebarComponent,
    LayoutComponent,
    CheckoutComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    InputTextModule
  ],
  exports: [
    MaterialModule
  ],
  providers: [CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
