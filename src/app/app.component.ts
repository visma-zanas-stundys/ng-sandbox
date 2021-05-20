import { Component, OnDestroy, OnInit } from '@angular/core';
import { forkJoin, Observable, Subscription } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { IProduct, ProductsService } from './core/products.service';
import { UserService } from './core/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  items$ = this.productsService.getItems();
  user$ = this.userService.getUser();

  loaded$ = forkJoin([this.items$, this.user$]).pipe(
    map(([items, user]) => ({ items, user }))
  );

  shouldLoadItems = false;

  constructor(
    private productsService: ProductsService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    return '123';
  }
}
