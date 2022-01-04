import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './input-property.component.html',
  styleUrls: ['./input-property.component.scss']
})
export class InputPropertyComponent implements OnInit {

  @Input('nome') nomeCurso:string = '';
  //Podemos usar internamento a variavel como 'nomeCurso' e externamente como 'nome', passando 'nome' como um parâmetro do decorator @Input. Assim no arquivo data-binding.component.html, fica: <app-curso [nome] = "nomeDoCurso"></app-curso>

  constructor() { }

  ngOnInit(): void {
  }

}
