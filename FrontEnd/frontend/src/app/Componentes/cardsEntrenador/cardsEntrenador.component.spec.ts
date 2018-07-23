import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsEntrenadorComponent } from './cardsEntrenador.component';

describe('CardsEntrenadorComponent', () => {
  let component: CardsEntrenadorComponent;
  let fixture: ComponentFixture<CardsEntrenadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardsEntrenadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsEntrenadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
