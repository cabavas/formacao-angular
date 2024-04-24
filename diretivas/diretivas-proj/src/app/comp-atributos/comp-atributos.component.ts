import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-comp-atributos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './comp-atributos.component.html',
  styleUrl: './comp-atributos.component.css',
})
export class CompAtributosComponent {
  item: string = '';
  corFundo: string = 'red';
  corFonte: string = 'white';
  estilo: string = 'enable';
  lista: string[] = ['1', '2', '3'];
  isEnableBlock: boolean = true;

  adicionarLista() {
    this.lista.push(this.item);
    console.log(this.lista);
  }
  trocar() {
    if (this.estilo == 'disable') {
      this.estilo = 'enable';
    } else {
      this.estilo = 'disable';
    }
  }
}
