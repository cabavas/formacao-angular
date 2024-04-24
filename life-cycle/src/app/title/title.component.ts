import { Component, Input, OnChanges, OnInit, SimpleChanges, input } from '@angular/core';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [],
  templateUrl: './title.component.html',
  styleUrl: './title.component.css'
})
export class TitleComponent implements OnInit, OnChanges{

  @Input() nome:string = '';
  
  constructor() {
    console.log("Construtor");
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("OnChanges");
  }
  ngOnInit(): void {
    console.log("OnInit");
  }

}
