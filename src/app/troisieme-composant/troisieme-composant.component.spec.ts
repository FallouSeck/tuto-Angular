import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TroisiemeComposantComponent } from './troisieme-composant.component';

describe('TroisiemeComposantComponent', () => {
  let component: TroisiemeComposantComponent;
  let fixture: ComponentFixture<TroisiemeComposantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TroisiemeComposantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TroisiemeComposantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
