import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  imports: [],
  templateUrl: './first-component.html',
  styleUrl: './first-component.css',
})
export class FirstComponent {
  nome = 'Jean'
  media = 8

  pessoa = {
    nome: 'Jean',
    idade: 23
  }

  mensagem():string {
    if(this.media >= 7) return 'Passou!'

    return 'Rodou!'
  }
}
