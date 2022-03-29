import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {RegistroModule} from './registro/registro.module';
import {UsuariosModule} from './usuarios/usuarios.module';

import {RegistroService} from './services/registro.service';
import {UsuariosService} from "./services/usuarios.service";
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    RegistroModule,
    UsuariosModule
  ],
  providers: [
    RegistroService,
    UsuariosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
