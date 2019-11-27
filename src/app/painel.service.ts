import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Senha } from './shared/senha.model'

//import 'rxjs/add/operator/toPromise'

@Injectable()
export class PainelService {

    constructor(private http: HttpClient) { }

    public async getSenha(): Promise<Senha[]> {
        const data = await this.http.get<Senha[]>('http://localhost:3000/fila')
            .toPromise();
        return data;
    }

    public async getProximo(): Promise<Senha> {
        const data = await this.http.get<Senha>('http://localhost:3000/fila?proximo=true')
            .toPromise();
        return data;
    }
}