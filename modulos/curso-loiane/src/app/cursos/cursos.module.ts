import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursosComponent } from './cursos.component';
import { CursosService } from './cursos.service';



@NgModule({
  declarations: [
    CursoDetalheComponent,
    CursosComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CursoDetalheComponent
  ],
  providers: [
    CursosService
  ]
})
export class CursosModule { }
