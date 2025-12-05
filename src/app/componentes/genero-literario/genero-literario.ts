import { IGeneroLiterario } from './../livro/iLivro';
import { Component, input } from '@angular/core';
import { Livro } from '../livro/livro';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-genero-literario',
  imports: [Livro, CommonModule],
  templateUrl: './genero-literario.html',
  styleUrl: './genero-literario.css',
})
export class GeneroLiterario {

  genero = input.required<IGeneroLiterario>();

}
