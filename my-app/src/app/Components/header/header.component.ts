import { Component, EventEmitter, Output, output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  search_text='';
  @Output()
  Event_emit =new EventEmitter();
  search(){
     this.Event_emit.emit(this.search_text);
  }
  logout(){
    localStorage.removeItem('token');
  }
}
