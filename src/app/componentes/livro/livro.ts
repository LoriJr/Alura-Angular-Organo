import { CommonModule } from '@angular/common';
import { ILivro } from './iLivro';
import { Component, input } from '@angular/core';


@Component({
  selector: 'app-livro',
  imports: [CommonModule],
  templateUrl: './livro.html',
  styleUrl: './livro.css',
})
export class Livro {

  livro = input.required<ILivro>();

  alternarFavorito(){
    this.livro().favorito = ! this.livro().favorito
  }
}
