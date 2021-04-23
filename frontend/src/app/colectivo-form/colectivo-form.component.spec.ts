import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColectivoFormComponent } from './colectivo-form.component';

describe('ColectivoFormComponent', () => {
  let component: ColectivoFormComponent;
  let fixture: ComponentFixture<ColectivoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColectivoFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColectivoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
