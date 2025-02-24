import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnidadMapComponent } from './unidad-map.component';

describe('UnidadMapComponent', () => {
  let component: UnidadMapComponent;
  let fixture: ComponentFixture<UnidadMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnidadMapComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnidadMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
