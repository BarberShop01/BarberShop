import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { pagePrincPage } from './pagePrinc.page';


describe('HomePage', () => {
  let component: pagePrincPage;
  let fixture: ComponentFixture<pagePrincPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [pagePrincPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(pagePrincPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
