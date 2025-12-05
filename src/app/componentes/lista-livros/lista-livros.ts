import { Component, OnInit } from '@angular/core';
import { IGeneroLiterario, ILivro } from '../livro/iLivro';
import { livros } from '../livro/mock-livros';
import { GeneroLiterario } from "../genero-literario/genero-literario";

@Component({
  selector: 'app-lista-livros',
  imports: [GeneroLiterario],
  templateUrl: './lista-livros.html',
  styleUrl: './lista-livros.css',
})
export class ListaLivros implements OnInit{

  generos: IGeneroLiterario[] = []
  livrosPorGenero: Map<string, ILivro[]> = new Map();

  ngOnInit() {
    this.livrosPorGenero = new Map();
    livros.forEach((livro) => {
      const generoId = livro.genero.id;
      if(!this.livrosPorGenero.has(generoId)){
        this.livrosPorGenero.set(generoId, [])
      }
      this.livrosPorGenero.get(generoId)?.push(livro) ?? []
    })


    this.generos = [
    {
        id: 'romance',
        value: "Romance",
        livros: this.livrosPorGenero.get("romance") ?? []
    },
    {
        id: 'Comportamento Humano',
        value: "Comportamento Humano",
        livros: this.livrosPorGenero.get("Comportamento Humano") ?? []
    },
    {
        id: 'misterio',
        value: 'Mistério',
        livros: this.livrosPorGenero.get("misterio") ?? []
    },
    {
        id: 'fantasia',
        value: 'Fantasia',
        livros: this.livrosPorGenero.get("fantasia") ?? []
    },
    {
        id: 'ficcao-cientifica',
        value: 'Ficção Científica',
        livros: this.livrosPorGenero.get("ficcao-cientifica") ?? []
    },
    {
        id: 'tecnicos',
        value: 'Técnicos',
        livros: this.livrosPorGenero.get("tecnicos") ?? []
    }
]

console.log(this.livrosPorGenero)

  }

}
