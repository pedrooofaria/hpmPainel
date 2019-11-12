import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Senha } from './shared/senha.model'

//import 'rxjs/add/operator/toPromise'

@Injectable()
export class PainelService {

    constructor(private http: HttpClient) { }

    public senhas: Senha[]

    public getSenha(): Promise<Senha[]> {
        return this.http.get<Senha[]>('http://localhost:3000/fila?status_presente=true')
            .toPromise()
            .then((resposta: any) => resposta.json());
    }
}