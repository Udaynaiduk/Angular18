import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObseablesComponent } from './obseables.component';

describe('ObseablesComponent', () => {
  let component: ObseablesComponent;
  let fixture: ComponentFixture<ObseablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ObseablesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObseablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
