import { Component } from '@angular/core';
import { Paddy } from '../../Models/Paddy.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProdcutComponent } from "../prodcut/prodcut.component";

@Component({
  selector: 'app-prodcuts',
  standalone: true,
  imports: [CommonModule, FormsModule, ProdcutComponent],
  templateUrl: './prodcuts.component.html',
  styleUrl: './prodcuts.component.css'
})
export class ProdcutsComponent {
  
  paddies: Paddy[] = [];

  ngOnInit(): void {
    this.paddies = [
      new Paddy(
        1,
        'Paddy Farm A',
        'Sona Masuri Old',
        1000,
        45,
        'Mudupuchettu Center',
        new Date('2024-01-05'),
        'https://5.imimg.com/data5/SELLER/Default/2023/3/HL/MN/HQ/11468237/sona-masoori-paddy-seeds-1000x1000.jpeg'
      ),
      new Paddy(
        2,
        'Paddy Farm B',
        'Sona Masuri New',
        800,
        40,
        'Vizag',
        new Date('2024-02-10'),
        'https://5.imimg.com/data5/SELLER/Default/2023/3/HL/MN/HQ/11468237/sona-masoori-paddy-seeds-1000x1000.jpeg'
      ),
      new Paddy(
        3,
        'Paddy Farm C',
        'Sona Masuri New',
        500,
        50,
        'Hyderabad',
        new Date('2024-03-15'),
        'https://5.imimg.com/data5/SELLER/Default/2023/3/HL/MN/HQ/11468237/sona-masoori-paddy-seeds-1000x1000.jpeg'
      )
    ];
  }

 
}
