import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuarterButtonComponent } from './quarter-button.component';

describe('QuarterButtonComponent', () => {
  let component: QuarterButtonComponent;
  let fixture: ComponentFixture<QuarterButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuarterButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuarterButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
