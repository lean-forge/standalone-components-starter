import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleStandaloneComponent } from './simple-standalone.component';

describe('SimpleStandaloneComponent', () => {
  let component: SimpleStandaloneComponent;
  let fixture: ComponentFixture<SimpleStandaloneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleStandaloneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimpleStandaloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
