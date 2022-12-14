import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProdutoComponent } from './produto/produto.component';
import { ParentDataComponent } from './parent-data/parent-data.component';
import { DirectivesComponent } from './directives/directives.component';
import { IfRenderComponent } from './if-render/if-render.component';
import { EventosComponent } from './eventos/eventos.component';
import { EmitterComponent } from './emitter/emitter.component';
import { ChangeNumberComponent } from './change-number/change-number.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProdutoComponent,
    ParentDataComponent,
    DirectivesComponent,
    IfRenderComponent,
    EventosComponent,
    EmitterComponent,
    ChangeNumberComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
