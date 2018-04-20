import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllpetComponent } from './allpet.component';

describe('AllpetComponent', () => {
  let component: AllpetComponent;
  let fixture: ComponentFixture<AllpetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllpetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllpetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
