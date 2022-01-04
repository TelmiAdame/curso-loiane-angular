import { Component, OnInit, Input } from '@angular/core';

type NewType = void;

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {

  url: string = 'http://loiane.com'
  cursoAngular: boolean = true
  urlImagem:string = 'https://lorempixel.com/400/200/animals/'

  //Variavel do Input 
  valorAtual: string = "";
  valorSalvo: string = "";

  //Variavel efeito mouse
  isMouseOver: boolean= false;

  //varialvel two data binding
  nome: string = 'abc';
  pessoa: any = {
    nome: 'Telmi',
    idade: 28
  }

  //Input-Property
  nomeDoCurso: string = 'Angular'

  constructor() { }

  ngOnInit(): void {
  }


  getValor(){
    return 2
  }

  getCurtirCurso(){
    return true
  }

  //EVENTO BOTÃO
  botaoClicado(){
    return alert('Clicou!') 
  }

  //Evento Imput
  onkeyUp(evento: KeyboardEvent){
    console.log((<HTMLInputElement>evento.target).value)
    this.valorAtual = (<HTMLInputElement>evento.target).value
    
  }

/* Nesse exemplo temos o método onkeyUp(). KeyboardEcent é o tipo da variavél 'evento', que descobrimos no CONSOLE.Todo evento também tem um target, nesse caso é o próprio elemento HTML que é o Input. Ao final do Input temos o elemento VALUE, onde podemos obter o valor digitado. Se usarmos apenas: evento.targer.value, o TypeScript da erro de compilação, por isso adicionamos o <HTMLInputElement>.*/

  salvarValor(valor: string){
    this.valorSalvo = valor
  }

  //Evento mouse
  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver
  }


}
