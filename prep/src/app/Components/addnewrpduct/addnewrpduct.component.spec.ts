import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnewrpductComponent } from './addnewrpduct.component';

describe('AddnewrpductComponent', () => {
  let component: AddnewrpductComponent;
  let fixture: ComponentFixture<AddnewrpductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddnewrpductComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddnewrpductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
