import { Component, inject, Sanitizer } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'prep';
  safeHtml!: SafeHtml;
  santize=inject(DomSanitizer)
  ngOnInit(){
   this.safeHtml=this.santize.bypassSecurityTrustScript('<script>alert("XSS Attack")</script>');
  }
}
