import { NgModule } from "@angular/core";

// Iniciar o roteamento
//importar o modulo de roteamento
import { RouterModule, Routes } from "@angular/router";
import { ListarProdutosComponent } from "./pages/listar-produtos/listar-produtos.component";
// rotas -> componente
/**
 * rotas -e responsável por armazenar as rotas
 * que existem dentro do site
 * 
 * cada item dentro do array rotas é de uma nova rota que foi declarada
 */

const rotas: Routes = [
{
    // http://localhosto:4200/produtos
    path: 'produtos',
    component: ListarProdutosComponent
} // Cada objeto é uma nova rota
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(rotas)  // modulo que inicia o roteamento e carrega as rotas qeu est
  ],
  providers: [],
  exports: [RouterModule] // exportando o modulo apos as rotas terem sido carregadas dentro dele
})
export class AppRoutingModule {}