import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { SecondComponent } from './second/second.component';
import { UnlessDirective } from './unless.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material/material.module';
import { BetterhightlightDirective } from './betterhightlight.directive';
import { ContainerComponent } from './container/container.component';
import { SearchComponent } from './search/search.component';
import { DemoComponent } from './demo/demo.component';

function initializeKeycloak(keycloak: KeycloakService) {
  return () =>
    keycloak.init({
      config: {
        url: 'http://localhost:8080/auth',
        realm: 'testing',
        clientId: 'angular-client',
      },
      initOptions: {
        checkLoginIframe: false,
        checkLoginIframeInterval: 25,
        onLoad: 'login-required',
        flow: 'standard',
      },
      //loadUserProfileAtStartUp: true,
    });
}

@NgModule({
  declarations: [
    AppComponent,
    SecondComponent,
    UnlessDirective,
    BetterhightlightDirective,
    ContainerComponent,
    SearchComponent,
    DemoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    KeycloakAngularModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule
    
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
