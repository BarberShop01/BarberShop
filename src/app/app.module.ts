import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';  // Essa linha já está correta
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,  // Componente principal da aplicação
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),  // Inicializa o Ionic
    AppRoutingModule,
    HttpClientModule  // Necessário para requisições HTTP, removido se não for utilizado
  ],
  providers: [
    {
      provide: RouteReuseStrategy,
      useClass: IonicRouteStrategy  // Estratégia de reutilização de rotas para otimizar navegação
    }
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],  // Adicione essa linha para permitir elementos personalizados
  bootstrap: [AppComponent]  // Componente inicial da aplicação
})
export class AppModule {}
