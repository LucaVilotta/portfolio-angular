import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TituloMainComponent } from './titulo-main.component';

describe('TituloMainComponent', () => {
  let component: TituloMainComponent;
  let fixture: ComponentFixture<TituloMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TituloMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TituloMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
