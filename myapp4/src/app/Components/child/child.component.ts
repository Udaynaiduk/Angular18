import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
 
})
export class ChildComponent {
@Input()
product:any

ngAfterViewChecked(){
  console.log('Child View Checked');
} 

}
