import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StudetComponent } from './studet/studet.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,StudetComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'HotelCenter';
}
