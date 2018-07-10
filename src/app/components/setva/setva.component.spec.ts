import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetvaComponent } from './setva.component';

describe('SetvaComponent', () => {
  let component: SetvaComponent;
  let fixture: ComponentFixture<SetvaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetvaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetvaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
