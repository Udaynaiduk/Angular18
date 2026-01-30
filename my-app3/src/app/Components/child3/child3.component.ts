import { ChangeDetectionStrategy, Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-child3',
  templateUrl: './child3.component.html',
  styleUrl: './child3.component.css',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class Child3Component {
@Input()
employee:any;
ngDoCheck(){
  console.log("Child3 component checked");
}
ngOnChanges(){
  console.log("Child3 component changes detected");
}
ngAfterViewInit(){
  console.log("Child3 view initialized");
}
}
