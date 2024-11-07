import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductNewsletterComponent } from './product-newsletter.component';

describe('ProductNewsletterComponent', () => {
  let component: ProductNewsletterComponent;
  let fixture: ComponentFixture<ProductNewsletterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductNewsletterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductNewsletterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
