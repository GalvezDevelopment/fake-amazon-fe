import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

import { ResumeComponent } from './resume.component';
import { AppState } from '../../store/store.module';
import { cartProductsList } from '../../shared/utils/products.utils';
import { By } from '@angular/platform-browser';
import { SharedModule } from '../../shared/shared.module';
import * as ProductSelectors from '../../store/cart/cart.selectors';

const initialState: AppState = {
  products: [],
  cart: cartProductsList
};

describe('ResumeComponent', () => {
  let component: ResumeComponent;
  let fixture: ComponentFixture<ResumeComponent>;
  let store: MockStore;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResumeComponent],
      imports: [SharedModule],
      providers: [
        provideMockStore({ initialState })
      ]
    })
      .compileComponents();

    store = TestBed.inject(MockStore);

    fixture = TestBed.createComponent(ResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show one product in the cart at least', () => {
    const items = fixture.debugElement.queryAll(By.css('.cart-product'));
    expect(items.length).toEqual(1);
  });

  it('should call the remeve function', () => {
    const items = fixture.debugElement.query(By.css('#removeBtn'));
    spyOn(component, 'remove');
    items.nativeElement.click();
    expect(component.remove).toHaveBeenCalled();
  });
});
