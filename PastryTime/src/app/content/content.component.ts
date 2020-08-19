import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart-service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  constructor(private cartservice: CartService) { }
  visible: boolean;
  ngOnInit() {
    this.cartservice.$toggle.subscribe(val => {
      this.visible = val;
    })
  }

}
