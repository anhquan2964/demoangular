import { Component } from '@angular/core';
import { ProductHotsComponent } from '../product-hots/product-hots.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductHotsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
