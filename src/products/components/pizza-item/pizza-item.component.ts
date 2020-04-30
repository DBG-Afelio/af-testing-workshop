import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
    selector: 'pizza-item',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['pizza-item.component.scss'],
    template: `
    <div class="pizza-item" data-cy="pizza">
      <a [routerLink]="['/products', pizza.id]">
        <pizza-display
          [pizza]="pizza">
        </pizza-display>
        <h4>{{ pizza.name }}</h4>
        <button data-cy="view-pizza-btn" type="button" class="btn btn__ok">
          View Pizza
        </button>
      </a>
    </div>
  `,
})
export class PizzaItemComponent {
    @Input() pizza: any;
}
