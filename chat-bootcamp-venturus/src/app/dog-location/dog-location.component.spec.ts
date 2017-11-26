import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DogLocationComponent } from './dog-location.component';

describe('DogLocationComponent', () => {
  let component: DogLocationComponent;
  let fixture: ComponentFixture<DogLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DogLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DogLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
