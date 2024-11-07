import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  firstName:string="Phạm Anh"
  lastName:string ="Quân"
  login:boolean = true;
  

  getName(){
    return this.firstName + " " +this.lastName
  }
}
