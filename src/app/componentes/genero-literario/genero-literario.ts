import { IGeneroLiterario } from './../livro/iLivro';
import { Component, input } from '@angular/core';
import { Livro } from '../livro/livro';
import { livros } from '../livro/mock-livros';

@Component({
  selector: 'app-genero-literario',
  imports: [Livro],
  templateUrl: './genero-literario.html',
  styleUrl: './genero-literario.css',
})
export class GeneroLiterario {

  genero = input.required<IGeneroLiterario>();

}
