import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{



  ngOnInit(): void {

  }
  title = 'Keycloak_Testing';

  constructor(private keycloak: KeycloakService) {}
  
  logout() {
    this.keycloak.logout();
  }



}
