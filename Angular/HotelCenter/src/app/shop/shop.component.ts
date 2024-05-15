import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Shop } from './shop.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent {
  adminName: string = 'Sujeeth';
  URL: string = window.location.href;
  shop1: Shop;
  constructor() {
    this.shop1 = new Shop('Textile',1000, 'Bangalore');
  }
    availableItems =["Shirt", "Pant", "Shoe", "Watch", "Belt", "Wallet", "Goggles", "Cap", "Tie", "Socks"];

}
