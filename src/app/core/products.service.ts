import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface IProduct {
  id: number;
  name: string;
}

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private httpClient: HttpClient) {}

  getItems() {
    return this.httpClient.get<IProduct[]>('http://localhost:3000/products');
  }
}
