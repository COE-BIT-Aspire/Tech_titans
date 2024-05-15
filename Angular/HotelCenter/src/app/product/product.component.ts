import { Component } from '@angular/core';
import { ProductModule } from './product.module';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  categoryInput:string="electronics";
  products: ProductModule[] = [
                              { productId: 100, productName: "Mobile", cost: 20000, category: "Electronics" },
                              {productId:101,productName:"Earbus",cost:2000,category:"Electronics"},
                              {productId:102,productName:"Labtop",cost:40000,category:"Electronics"},
                              {productId:103,productName:"Charger",cost:1000,category:"Electronics"},
                              {productId:104,productName:"Powebank",cost:2000,category:"Electronics"},
                              {productId:105,productName:"Keyboard",cost:500,category:"Electronics"},
                              {productId:106,productName:"Mouse",cost:400,category:"Electronics"},
                ];
}
