// order.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private ordersApiUrl = 'https://67176745b910c6a6e027f2f6.mockapi.io/orders';

  constructor(private http: HttpClient) {}

  submitOrder(orderData: any): Observable<any> {
    return this.http.post(this.ordersApiUrl, orderData);
  }
}
