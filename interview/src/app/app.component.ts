import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./Components/navbar/navbar.component";
import { Lelvel3Component } from "./Components/lelvel3/lelvel3.component";
import { FlexboxComponent } from "./Components/flexbox/flexbox.component";
import { AnimationComponent } from "./Components/animation/animation.component";
import { BindingComponent } from "./Components/binding/binding.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule, NavbarComponent, Lelvel3Component, FlexboxComponent, AnimationComponent, BindingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'interview';
  isfalg:boolean=false;

darkmode=true;
  dark(){
    var body=document.body;
    if(this.darkmode){
      this.darkmode=false;
      body.style.backgroundColor="black";
      body.style.color="white";
    }
    else{
      this.darkmode=true;
      body.style.backgroundColor="white";
      body.style.color="black";
    }
    
  }
}
