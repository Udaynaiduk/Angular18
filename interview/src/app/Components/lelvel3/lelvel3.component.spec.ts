import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lelvel3Component } from './lelvel3.component';

describe('Lelvel3Component', () => {
  let component: Lelvel3Component;
  let fixture: ComponentFixture<Lelvel3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lelvel3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lelvel3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
