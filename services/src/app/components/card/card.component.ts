import { Component } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { PokemonData } from '../../models/pokemonData';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  imports: [CommonModule],
})
export class CardComponent {
  name: string = 'CHARIZARD';
  attributeTypes: string[] = ['FIRE', 'WATER'];

  constructor(private service: PokemonService) {}
}
