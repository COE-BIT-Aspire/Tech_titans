import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcountHolderComponent } from './acount-holder.component';

describe('AcountHolderComponent', () => {
  let component: AcountHolderComponent;
  let fixture: ComponentFixture<AcountHolderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcountHolderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AcountHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
