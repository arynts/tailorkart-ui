import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideodemoComponent } from './videodemo.component';

describe('VideodemoComponent', () => {
  let component: VideodemoComponent;
  let fixture: ComponentFixture<VideodemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideodemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideodemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
