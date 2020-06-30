import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilamentsComponent } from './filaments.component';

describe('FilamentsComponent', () => {
  let component: FilamentsComponent;
  let fixture: ComponentFixture<FilamentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilamentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilamentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
