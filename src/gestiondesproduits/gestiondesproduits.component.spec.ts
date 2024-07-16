import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestiondesproduitsComponent } from './gestiondesproduits.component';

describe('GestiondesproduitsComponent', () => {
  let component: GestiondesproduitsComponent;
  let fixture: ComponentFixture<GestiondesproduitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestiondesproduitsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GestiondesproduitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
