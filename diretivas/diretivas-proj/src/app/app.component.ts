import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from "./card/card.component";
import { CommonModule } from '@angular/common';
import { CompAtributosComponent } from "./comp-atributos/comp-atributos.component";
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, CardComponent, CommonModule, CompAtributosComponent, FormsModule]
})
export class AppComponent {
  title = 'diretivas-proj';
  isAliveCard = true;
}
