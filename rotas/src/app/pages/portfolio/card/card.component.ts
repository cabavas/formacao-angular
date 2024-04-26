import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  constructor(
    private parametrizador: ActivatedRoute,
    private navegador: Router
  ) {
    //http://localhost:4200/portfolio/{1}
    this.parametrizador.params.subscribe((res) => console.log(res));

    //http://localhost:4200/portfolio/1?{name=caio&token=123}
    this.parametrizador.firstChild?.params.subscribe((res) => console.log(res));
  }

  ngOnInit(): void {
    // setInterval(() => {
    //   this.navegador.navigate(['/'])
    // }, 5000)
  }
}
