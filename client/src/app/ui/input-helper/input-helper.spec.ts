import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputHelper } from './input-helper';

describe('InputHelper', () => {
  let component: InputHelper;
  let fixture: ComponentFixture<InputHelper>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputHelper]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputHelper);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
