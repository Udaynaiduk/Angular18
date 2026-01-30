import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BindingComponent } from "./Components/binding/binding.component";
import { ParentComponent } from "./Components/parent/parent.component";
import { PipesComponent } from "./Components/pipes/pipes.component";
import { LoginComponent } from "./Components/login/login.component";
import { ObsrrableComponent } from "./Components/obsrrable/obsrrable.component";
import { NavbarComponent } from "./Components/navbar/navbar.component";
import { TestComponent } from "./Components/test/test.component";
import { TodoComponent } from "./Components/todo/todo.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BindingComponent, ParentComponent, PipesComponent, LoginComponent, ObsrrableComponent, NavbarComponent, TestComponent, TodoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myapp4';
}
