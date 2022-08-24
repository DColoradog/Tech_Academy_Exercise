import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaAutosComponent } from './autos/lista-autos.component';
import { DetalleAutosComponent } from './autos/detalle-autos/detalle-autos.component';
import { AEspacioPipe } from './shared/a-espacio.pipe';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EstrellasComponent } from './shared/estrellas/estrellas.component';
import { FormsModule } from '@angular/forms';
import { ClientesComponent } from './clientes/clientes.component';
import { RouterModule } from '@angular/router';
import { InicioComponent } from './autos/inicio/inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaAutosComponent,
    DetalleAutosComponent,
    AEspacioPipe,
    EstrellasComponent,
    ClientesComponent,
    InicioComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    RouterModule.forRoot([
      { path: "autos", component: ListaAutosComponent },
      { path: "auto/:id", component: DetalleAutosComponent },
      { path: "inicio", component: InicioComponent },
      { path: "clientes", component: ClientesComponent },
      { path: "", redirectTo: "inicio", pathMatch: "full" },
      { path: "**", redirectTo: "inicio", pathMatch: "full" }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent, ListaAutosComponent]
})
export class AppModule { }
