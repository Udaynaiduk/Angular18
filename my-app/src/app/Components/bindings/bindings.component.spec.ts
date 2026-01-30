import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BindingsComponent } from './bindings.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

describe('BindingsComponent', () => {
  let component: BindingsComponent;
  let fixture: ComponentFixture<BindingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BindingsComponent],
      imports:[FormsModule,CommonModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BindingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have show is false after shows', () => {
    component.show = true;
   component.shows();
   expect(component.show).toBe(false);

});
it('should have mode toggled after modes',async () => {
  component.mode = false;
  component.modes(null);
  expect(component.mode).toBe(true);
  let compiled=fixture.nativeElement as HTMLElement;
  expect(document.body.style.backgroundColor).toBe("black");
 await fixture.whenStable();
  await fixture.whenStable();
  fixture.detectChanges();
  let buttons = Array.from(compiled.querySelectorAll('button')).map(btn => btn.textContent);
  let buttonIndex = buttons.findIndex(text => text?.trim() === 'Light');
  expect(buttonIndex).toBeGreaterThan(0);
})
it('should be called log with name', () => {

  component.msg="uday";
  spyOn(console, 'log');
  component.log(component.msg);
  expect(console.log).toHaveBeenCalledWith("uday");
  expect(component.msg).toBe("uday");
});

it('should alter window alert on f1', () => {
  component.f1()
  expect(window.alert).toBeDefined();
})})
