import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  menuType: string = 'admin';

  remover(index: number) {
    this.produtos.splice(index, 1);
  }
  adicionar() {
    this.produtos.push('Caio');
  }
  produtos: string[] = ['mouse', 'teclado', 'cabo', 'fonte'];
}
