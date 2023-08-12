import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FastivalComponent } from './fastival.component';

describe('FastivalComponent', () => {
  let component: FastivalComponent;
  let fixture: ComponentFixture<FastivalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FastivalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FastivalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
