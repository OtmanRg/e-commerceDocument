import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllvisitorComponent } from './allvisitor.component';

describe('AllvisitorComponent', () => {
  let component: AllvisitorComponent;
  let fixture: ComponentFixture<AllvisitorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllvisitorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllvisitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
