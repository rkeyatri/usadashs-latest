import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsTableComponent } from './as-table.component';

describe('AsTableComponent', () => {
  let component: AsTableComponent;
  let fixture: ComponentFixture<AsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
