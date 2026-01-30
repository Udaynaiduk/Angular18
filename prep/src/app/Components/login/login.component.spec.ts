import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports:[FormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update login object on valid form submit', () => {
    const email = fixture.debugElement.query(By.css('#email')).nativeElement;
    const password = fixture.debugElement.query(By.css('#password')).nativeElement;
  
    email.value = "uday32577@gmail.com";
    password.value = "Uday@32577";
  
    email.dispatchEvent(new Event('input'));
    password.dispatchEvent(new Event('input'));
    fixture.detectChanges();
  
    const form = fixture.debugElement.query(By.css('form')).nativeElement;
    form.dispatchEvent(new Event('submit'));
  
    fixture.detectChanges();
  
    // Test the component's login object
    expect(component.login).toEqual({
      email: 'uday32577@gmail.com',
      password: 'Uday@32577'
    });
  });
  
})
