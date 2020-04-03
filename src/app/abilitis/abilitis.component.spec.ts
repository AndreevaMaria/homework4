/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AbilitisComponent } from './abilitis.component';

describe('AbilitisComponent', () => {
  let component: AbilitisComponent;
  let fixture: ComponentFixture<AbilitisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbilitisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbilitisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
