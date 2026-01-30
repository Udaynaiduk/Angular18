import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObsrrableComponent } from './obsrrable.component';

describe('ObsrrableComponent', () => {
  let component: ObsrrableComponent;
  let fixture: ComponentFixture<ObsrrableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObsrrableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObsrrableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
