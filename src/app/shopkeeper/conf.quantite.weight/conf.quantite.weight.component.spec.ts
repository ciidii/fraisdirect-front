import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfQuantiteWeightComponent } from './conf.quantite.weight.component';

describe('ConfQuantiteWeightComponent', () => {
  let component: ConfQuantiteWeightComponent;
  let fixture: ComponentFixture<ConfQuantiteWeightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfQuantiteWeightComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConfQuantiteWeightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
