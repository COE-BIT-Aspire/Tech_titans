import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {

  productData: any;

  constructor(private service: ProductService) { }

  ngOnInit() {
      this.service.getAllProducts().subscribe((data) => {
        this.productData = data;
      });
  }

}
