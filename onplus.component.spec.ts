import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnplusComponent } from './onplus.component';

describe('OnplusComponent', () => {
  let component: OnplusComponent;
  let fixture: ComponentFixture<OnplusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnplusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnplusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
