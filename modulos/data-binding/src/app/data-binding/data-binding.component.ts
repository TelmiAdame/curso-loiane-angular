import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {

  url: string = 'http://loiane.com'
  cursoAngular: boolean = true
  urlImagem:string = 'https://lorempixel.com/400/200/animals/'

  constructor() { }

  ngOnInit(): void {
  }

  getValor(){
    return 2
  }

  getCurtirCurso(){
    return true
  }

}
