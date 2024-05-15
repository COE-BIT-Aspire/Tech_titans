import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StudetComponent } from './studet/studet.component';
import { FormsModule } from '@angular/forms';
import { ShopComponent } from './shop/shop.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,StudetComponent,FormsModule,ShopComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Hotel Center';
}
