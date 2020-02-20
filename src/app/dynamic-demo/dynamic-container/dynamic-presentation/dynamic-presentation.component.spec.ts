import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicPresentationComponent } from './dynamic-presentation.component';

describe('DynamicPresentationComponent', () => {
  let component: DynamicPresentationComponent;
  let fixture: ComponentFixture<DynamicPresentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicPresentationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
