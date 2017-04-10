import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OblivionSearchFormComponent } from './oblivion-search-form.component';
import { FormsModule } from "@angular/forms";

describe('OblivionSearchFormComponent', () => {
  let component: OblivionSearchFormComponent;
  let fixture: ComponentFixture<OblivionSearchFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports : [
        FormsModule
      ],
      declarations: [ OblivionSearchFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OblivionSearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
