import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-product-hots',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-hots.component.html',
  styleUrl: './product-hots.component.css'
})
export class ProductHotsComponent {
    products = [
      {
        name: 'Earthen Bottle',
        price: 48,
        image: 'https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-01.jpg',
        description: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.'
      },
      {
        name: 'Glass Vase',
        price: 32,
        image: 'https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-02.jpg',
        description: 'Hand-blown clear glass vase with a rounded shape.'
      },
      {
        name: 'Wooden Spoon',
        price: 15,
        image: 'https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-03.jpg',
        description: 'Smooth and durable wooden spoon, perfect for cooking.'
      },
      {
        name: 'Ceramic Plate',
        price: 22,
        image: 'https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-04.jpg',
        description: 'Elegant ceramic plate with a simple, modern design.'
      }
    ];
  }

