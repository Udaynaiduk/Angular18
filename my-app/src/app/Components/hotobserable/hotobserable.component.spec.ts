import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotobserableComponent } from './hotobserable.component';

describe('HotobserableComponent', () => {
  let component: HotobserableComponent;
  let fixture: ComponentFixture<HotobserableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HotobserableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotobserableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
