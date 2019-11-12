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
  public senha_atual: number
  public rg_atual: string
  public nome_atual: string

  constructor(private painelService: PainelService) { }

  ngOnInit() {
    this.painelService.getSenha()
      .then(( senhas: Senha[]) => {
        this.senhas = senhas
        this.senha_atual = 1
        this.rg_atual = '12356'
        this.nome_atual = 'Fulano'
      })
      .catch(( param: any) => {
        console.log(param)
      })
  }

  teste() {
    this.senha_atual = 1
    this.rg_atual = '12356'
    this.nome_atual = 'Fulano'
  }

}
