import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudetComponent } from './studet.component';

describe('StudetComponent', () => {
  let component: StudetComponent;
  let fixture: ComponentFixture<StudetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
