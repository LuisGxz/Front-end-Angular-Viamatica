import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginValid = true;
  usuario: string = '';
  password: string = '';
  
  constructor(private router: Router){}

  login() {
    if (this.usuario === 'admin' && this.password === '12345') {
      this.router.navigate(['/autores/listado']);
    } else {
      this.loginValid = false;
    }
  }

}
