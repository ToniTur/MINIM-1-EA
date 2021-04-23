import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColectivoListComponent } from './colectivo-list.component';

describe('ColectivoListComponent', () => {
  let component: ColectivoListComponent;
  let fixture: ComponentFixture<ColectivoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColectivoListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColectivoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
