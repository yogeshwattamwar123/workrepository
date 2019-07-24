import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NestediterationsComponent } from './nestediterations.component';

describe('NestediterationsComponent', () => {
  let component: NestediterationsComponent;
  let fixture: ComponentFixture<NestediterationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NestediterationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NestediterationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
