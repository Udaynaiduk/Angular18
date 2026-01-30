import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexboxComponent } from './flexbox.component';
import { ElementRef } from '@angular/core';

describe('FlexboxComponent', () => {
  let component: FlexboxComponent;
  let fixture: ComponentFixture<FlexboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlexboxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlexboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should navbar have home link', () => {
    let compiled=fixture as ElementRef;
    expect(compiled.nativeElement.querySelectorAll("a").length).toBeGreaterThan(0);
    expect(compiled.nativeElement.querySelector("a").textContent).toContain("Home");
});
})