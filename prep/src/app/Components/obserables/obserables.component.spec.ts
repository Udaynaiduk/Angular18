import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObserablesComponent } from './obserables.component';

describe('ObserablesComponent', () => {
  let component: ObserablesComponent;
  let fixture: ComponentFixture<ObserablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ObserablesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObserablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
