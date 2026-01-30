import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynmaicComponent } from './dynmaic.component';

describe('DynmaicComponent', () => {
  let component: DynmaicComponent;
  let fixture: ComponentFixture<DynmaicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynmaicComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynmaicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
