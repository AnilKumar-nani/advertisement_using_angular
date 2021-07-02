import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RonaldComponent } from './ronald.component';

describe('RonaldComponent', () => {
  let component: RonaldComponent;
  let fixture: ComponentFixture<RonaldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RonaldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RonaldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
