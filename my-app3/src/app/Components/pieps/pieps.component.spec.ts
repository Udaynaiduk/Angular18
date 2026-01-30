import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiepsComponent } from './pieps.component';

describe('PiepsComponent', () => {
  let component: PiepsComponent;
  let fixture: ComponentFixture<PiepsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PiepsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PiepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
