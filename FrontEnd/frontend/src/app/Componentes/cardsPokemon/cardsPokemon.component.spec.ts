import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsPokemonComponent } from './cardsPokemon.component';

describe('CardsPokemonComponent', () => {
  let component: CardsPokemonComponent;
  let fixture: ComponentFixture<CardsPokemonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardsPokemonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
