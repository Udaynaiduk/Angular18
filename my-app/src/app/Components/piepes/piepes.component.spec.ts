import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiepesComponent } from './piepes.component';

describe('PiepesComponent', () => {
  let component: PiepesComponent;
  let fixture: ComponentFixture<PiepesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PiepesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PiepesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
