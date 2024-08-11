import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Account } from '../../models/account-status.model';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {

  email: string = '';
  password: string = '';
  rememberMe: boolean = false;
  errorMessage: string = '';
  formulario: FormGroup;
  userData!: Account;

  constructor(private authService: AuthService, private router: Router, private formBuilder: FormBuilder){
    this.formulario = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      rememberMe: [false]
    });
  }
  
  onSubmit(){
    if(this.authService.validateUser(this.formulario.value.email, this.formulario.value.password)){
      this.router.navigate(['inicio']);
    } else {
      this.errorMessage = 'Correo electrónico o contraseña incorrectos.';
    }
  }
}
