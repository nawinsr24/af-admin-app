import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockLablesComponent } from './stock-lables.component';

describe('StockLablesComponent', () => {
  let component: StockLablesComponent;
  let fixture: ComponentFixture<StockLablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockLablesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockLablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
