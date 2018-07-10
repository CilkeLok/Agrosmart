import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZaradaComponent } from './zarada.component';

describe('ZaradaComponent', () => {
  let component: ZaradaComponent;
  let fixture: ComponentFixture<ZaradaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZaradaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZaradaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
