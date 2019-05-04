import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PricecatalogComponent } from './pricecatalog.component';

describe('PricecatalogComponent', () => {
  let component: PricecatalogComponent;
  let fixture: ComponentFixture<PricecatalogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PricecatalogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PricecatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
