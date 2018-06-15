import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeuxiemeComposantComponent } from './deuxieme-composant.component';

describe('DeuxiemeComposantComponent', () => {
  let component: DeuxiemeComposantComponent;
  let fixture: ComponentFixture<DeuxiemeComposantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeuxiemeComposantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeuxiemeComposantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
