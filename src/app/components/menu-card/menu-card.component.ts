// menu-card.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu-card',
  standalone: true,
  imports: [],
  templateUrl: './menu-card.component.html',
  styleUrls: ['./menu-card.component.css']
})
export class MenuCardComponent {
  @Input() item: any;
  @Output() addToCart = new EventEmitter<any>();
  @Output() toggleFavorite = new EventEmitter<any>();

  onAddToCart() {
    this.addToCart.emit(this.item);
  }

  onToggleFavorite() {
    this.toggleFavorite.emit(this.item);
  }
}
