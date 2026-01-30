import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModerfomrsComponent } from './moderfomrs.component';

describe('ModerfomrsComponent', () => {
  let component: ModerfomrsComponent;
  let fixture: ComponentFixture<ModerfomrsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModerfomrsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModerfomrsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
