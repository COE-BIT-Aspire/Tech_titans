import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Shop } from './shop.model';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [FormsModule],
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
}
