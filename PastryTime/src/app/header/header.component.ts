import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private cartservice: CartService) { }
  visible: boolean = false;


  ngOnInit() {
  }

  toggle(): void{
    this.visible = !this.visible;
    this.cartservice.setToggle(this.visible);
  }

}
