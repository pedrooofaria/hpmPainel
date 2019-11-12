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
  public senhas_presente: number[]
  public senhas_atendidas: number[]

  constructor(private painelService: PainelService) { }

  ngOnInit() {
    this.painelService.getSenha()
      .then(( senhas: Senha[]) => {
        this.senhas = senhas
      })
      .catch(( param: any) => {
        console.log(param)
      })
    let i = 0;
    for(let cont=0; cont<this.senhas.length; cont++){
      if(this.senhas[cont].status_presente == true && this.senhas[cont].status_atendido == false)
        this.senhas_presente[i] = this.senhas[cont].senha;
    }
  }

}
