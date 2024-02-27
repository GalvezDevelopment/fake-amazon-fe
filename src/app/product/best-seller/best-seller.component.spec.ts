import { ComponentFixture, TestBed } from '@angular/core/testing';

import { By } from '@angular/platform-browser';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { Product } from '../../shared/models/product';
import { AppState } from '../../store/store.module';
import { BestSellerComponent } from './best-seller.component';
import * as ProductSelectors from '../../store/product/product.selectors';
import { lastValueFrom, take } from 'rxjs';
import { productsList } from '../../shared/utils/products.utils';

const initialState: AppState = { products: productsList, cart: [] };

describe('BestSellerComponent', () => {
  let component: BestSellerComponent;
  let fixture: ComponentFixture<BestSellerComponent>;
  let store: MockStore;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BestSellerComponent],
      imports: [
      ],
      providers: [
        provideMockStore({ initialState })
      ]
    })
      .compileComponents();

    store = TestBed.inject(MockStore);

    fixture = TestBed.createComponent(BestSellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show more than two products', async () => {
    const productsObs = store.select(ProductSelectors.selectProducts).pipe(take(1));
    const productObsCount = await lastValueFrom(productsObs);
    expect(productObsCount.length).toBeGreaterThan(1);
    const products = fixture.debugElement.queryAll(By.css('.product-item'));
    expect(products).toBeTruthy();
    expect(products.length).toBeGreaterThan(1);
  });

  it('should call the add function', () => {
    const product = fixture.debugElement.query(By.css('#add'));
    expect(product).toBeTruthy();
    spyOn(component, 'addProductCart');
    product.nativeElement.click();
    expect(component.addProductCart).toHaveBeenCalled();
  });
});
