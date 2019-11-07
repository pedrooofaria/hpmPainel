import { Senha } from './shared/senha.model'

export class PainelService {

    public senhas: Senha[] = [
        rg: '5324255 SSP-GO',
        box: 1
    ]

    public getSenha(): Array<Senha> {
        return this.senhas
    }
}