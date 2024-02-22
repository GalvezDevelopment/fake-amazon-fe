import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestWishedComponent } from './best-wished.component';

describe('BestWishedComponent', () => {
  let component: BestWishedComponent;
  let fixture: ComponentFixture<BestWishedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BestWishedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BestWishedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
