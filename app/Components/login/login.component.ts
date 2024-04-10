import { Component } from '@angular/core';
import { userMaster } from '../../Models/user-master';
import { BearerTokenService } from '../../Services/bearer-token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

    userCredentials : userMaster = new userMaster();

    constructor(private tokenService: BearerTokenService){
      this.userCredentials  = new userMaster();
      this.userCredentials.username="admin@pixxeldigital.com";
      this.userCredentials.password="JaipurRugs@7618";
      this.userCredentials.client_id="DD92F35C-FA0F-48A8-AF09-13197463D6CF";
      this.userCredentials.client_secret="373C883D-350F-4823-BEDD-F85241777825";
      this.userCredentials.grant_type="password";
    }

    login(){
      this.tokenService.getToken(this.userCredentials).subscribe(token => {
        console.log(token);
      });
    }
}
