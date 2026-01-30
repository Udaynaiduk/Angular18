import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewprodictComponent } from './viewprodict.component';

describe('ViewprodictComponent', () => {
  let component: ViewprodictComponent;
  let fixture: ComponentFixture<ViewprodictComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewprodictComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewprodictComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
