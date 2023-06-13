import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginValid = true;
  usuario: string = '';
  password: string = '';
  
  constructor(private router: Router, private authService: AuthService){}

  login() {
    if (this.usuario === 'admin' && this.password === '12345') {
      this.router.navigate(['/autores/listado']);
      this.authService.login(this.usuario, this.password);
    } else {
      this.loginValid = false;
    }
  }

}
