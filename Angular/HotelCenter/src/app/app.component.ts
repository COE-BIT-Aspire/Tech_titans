import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StudetComponent } from './studet/studet.component';
import { FormsModule } from '@angular/forms';
import { ShopComponent } from './shop/shop.component';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { AcountHolderComponent } from './acount-holder/acount-holder.component';
import { RouterLink } from '@angular/router';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,StudetComponent,FormsModule,ShopComponent,CommonModule,ProductComponent,AcountHolderComponent,RouterLink,ProductDetailsComponent,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Hotel Center';
  DOJ: Date = new Date();
}
