import { TestBed } from '@angular/core/testing';

import { PostalDeliveryService } from './postal-delivery.service';

describe('PostalDeliveryService', () => {
  let service: PostalDeliveryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostalDeliveryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
