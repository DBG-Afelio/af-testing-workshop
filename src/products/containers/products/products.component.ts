import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';

import { Pizza } from '../../models/pizza.model';
import { PizzasAction, PizzasState } from '../../store';

@Component({
    selector: 'products',
    // changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['products.component.scss'],
    template: `
    <div class="products" *ngIf="(pizzas$ | async) as pizzas">
      <div class="products__new">
        <a
            data-cy="new-pizza-btn"
          class="btn btn__ok"
          routerLink="./new">
          New Pizza
        </a>
      </div>
      <div class="products__list">
        <div *ngIf="!((pizzas)?.length)" data-cy="no-pizza">
          No pizzas, add one to get started.
        </div>
        <pizza-item
          *ngFor="let pizza of (pizzas)"
          [pizza]="pizza">
        </pizza-item>
      </div>
    </div>
  `,
})
export class ProductsComponent implements OnInit {

    @Select(PizzasState.pizzas)
    public pizzas$: Observable<Pizza[]>;

    constructor(private store: Store) { }

    ngOnInit() {
        this.store.dispatch(new PizzasAction.LoadList());
    }
}
