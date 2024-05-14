import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StudetComponent } from './studet/studet.component';
import { FormsModule } from '@angular/forms';
import { ShopComponent } from './shop/shop.component';
import { NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,StudetComponent,FormsModule,ShopComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Hotel Center';
}
