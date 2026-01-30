import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigginComponent } from './siggin.component';

describe('SigginComponent', () => {
  let component: SigginComponent;
  let fixture: ComponentFixture<SigginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SigginComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SigginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
