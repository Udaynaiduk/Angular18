import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoleComponent } from './cursole.component';

describe('CursoleComponent', () => {
  let component: CursoleComponent;
  let fixture: ComponentFixture<CursoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CursoleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CursoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
