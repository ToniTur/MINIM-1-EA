import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColectivoDetailComponent } from './colectivo-detail.component';

describe('ColectivoDetailComponent', () => {
  let component: ColectivoDetailComponent;
  let fixture: ComponentFixture<ColectivoDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColectivoDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColectivoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
