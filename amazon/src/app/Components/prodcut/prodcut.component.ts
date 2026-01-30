import { Component, Input, input } from '@angular/core';
import { Paddy } from '../../Models/Paddy.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-prodcut',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './prodcut.component.html',
  styleUrl: './prodcut.component.css',
  
})
export class ProdcutComponent {

@Input()
paddy!: Paddy;
getTotalValue(paddy: Paddy): number {
  return paddy.quantityKg * paddy.pricePerKg;
}
}
