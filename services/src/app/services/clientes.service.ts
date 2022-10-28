import { Injectable } from '@angular/core';


/**
 * ProvideIn informa onde o serviço sera fornecido
 */

/**
 * a ideia de um serviço no angular
 * é encapsular alguma logica que 
 * pode ser utilizada em vários locais da sua aplicação
 * 
 */

interface Cliente {
  nome: string,
  sobrenome: string,
  telefone: string,
  id: number,
  email: string,
  cpf: string,
}

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  private clientes: Cliente[] = [
    {
      nome: 'Frederico',
      sobrenome: 'Alves',
      cpf: '11111111111',
      email: 'frealves@gmail.com',
      telefone: '40028922',
      id: 1
    },
    {
      nome: 'José',
      sobrenome: 'Almir',
      cpf: '22222222222',
      email: 'jose.almir@soulcodeacademy.org',
      telefone: '40028922',
      id: 2
    },
    {
      nome: 'Renato',
      sobrenome: 'Pereira',
      cpf: '33333333333',
      email: 'renato.pereira@soulcodeacademy.org',
      telefone: '40028922',
      id: 3
    }
  ]
  constructor() { }

  listarClientes(): Cliente[] {
    //toda a logica para acessar a api e pegar dados
    return this.clientes
  }

  listarClientePeloId(id: number): Cliente | undefined{
    /**
     * o metodo find() dos arrays serve para procurar algum valor dentro do array
     * 
     * é necessario que passe como parametro do metodo find() uma função
     * essa função será utilizada dentro do metodo para procurar um valor.
     * A função que será passada DEVE retornar sempre um valor booleano.
     */
    const clienteEncontrado =this.clientes.find((c) =>{
      c.id == id
    } )
    return clienteEncontrado
  }
}
