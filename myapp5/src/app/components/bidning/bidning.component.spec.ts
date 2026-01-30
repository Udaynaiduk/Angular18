import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BidningComponent } from './bidning.component';

describe('BidningComponent', () => {
  let component: BidningComponent;
  let fixture: ComponentFixture<BidningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BidningComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BidningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
