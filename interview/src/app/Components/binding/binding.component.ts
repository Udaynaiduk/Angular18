import { Component } from '@angular/core';
import { CommonModule, NgForOf } from "../../../../node_modules/@angular/common/index";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-binding',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './binding.component.html',
  styleUrl: './binding.component.css'
})
export class BindingComponent {
name:string="Angular Binding Example";
skills:string[]=["HTML","CSS","JavaScript","TypeScript","Angular"];

trackBySkill(index: number, item: string): string {
  return item; // unique string value
}
}
