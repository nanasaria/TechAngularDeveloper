import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  produtos: string[] = [];
  menuType: string = '';

  constructor() {
    this.produtos = ['mouse', 'teclado', 'cabo', 'fonte'];
  }

  ngOnInit(): void {}

  adicionar() {
    this.produtos.push('Celina');
  }

  remover(index: number) {
    this.produtos.splice(index, 1);
  }
}
