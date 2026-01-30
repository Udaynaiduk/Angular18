import { NgModule } from "@angular/core";
import { ViewComponent } from "./Components/view/view.component";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

@NgModule({
    declarations: [ViewComponent],
    imports: [CommonModule, RouterModule.forChild([{ path: '', component: ViewComponent }])]
  })
  export class ViewModule {}