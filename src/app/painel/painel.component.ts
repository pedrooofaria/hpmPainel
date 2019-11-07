import { Component, OnInit } from '@angular/core';
import { PainelService } from '../painel.service'
import { Senha } from '../shared/senha.model'

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css'],
  providers: [ PainelService ]
})
export class PainelComponent implements OnInit {

  public senhas: Senha[]

  constructor(private painelService: PainelService) { }

  ngOnInit() {
    this.senhas = this.painelService.getSenha()

  }

}
