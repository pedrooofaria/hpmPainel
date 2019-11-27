import { Component, OnInit } from '@angular/core';
import { PainelService } from '../painel.service'
import { Senha } from '../shared/senha.model'
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css'],
  providers: [ PainelService ]
})
export class PainelComponent implements OnInit {

  public proximo: Senha
  public senhas: Senha[]
  public nomeP: String = "TESTE"

  constructor(private painelService: PainelService) { }


  /**
   * atualizar
   */
  public atualizar() {
    
  }

  ngOnInit() {
    this.painelService.getSenha()
      .then(( senhas: Senha[]) => {
        this.senhas = senhas
        console.log(senhas)
      })
      .catch(( param: any) => {
        console.log(param)
      })

      this.painelService.getProximo()
      .then(( proximo: Senha) => {
        this.proximo = proximo
        //this.nomeP = proximo.nome
        console.log(this.proximo)
      })
      .catch(( param: any) => {
        console.log(param)
      })
  }


  
}