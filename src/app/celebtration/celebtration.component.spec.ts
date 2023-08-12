import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CelebtrationComponent } from './celebtration.component';

describe('CelebtrationComponent', () => {
  let component: CelebtrationComponent;
  let fixture: ComponentFixture<CelebtrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CelebtrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CelebtrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
