import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfProductComponent } from './conf.product.component';

describe('ConfProductComponent', () => {
  let component: ConfProductComponent;
  let fixture: ComponentFixture<ConfProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfProductComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConfProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
