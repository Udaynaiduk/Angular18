import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AgePipe } from '../../pipe/age.pipe';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-pipes',
  standalone: true,
  imports: [CommonModule, FormsModule, AgePipe, RouterLink],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent {
todat:Date=new Date()
Dob:Date=new Date()
}
