import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZetvaComponent } from './zetva.component';

describe('ZetvaComponent', () => {
  let component: ZetvaComponent;
  let fixture: ComponentFixture<ZetvaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZetvaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZetvaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
