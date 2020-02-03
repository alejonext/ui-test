import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonHeroComponent } from './person-hero.component';

describe('PersonHeroComponent', () => {
  let component: PersonHeroComponent;
  let fixture: ComponentFixture<PersonHeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonHeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
