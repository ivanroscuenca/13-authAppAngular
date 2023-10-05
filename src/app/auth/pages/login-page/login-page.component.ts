import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  private fb = inject( FormBuilder);
  //inyectamos servicio
  private authService = inject(AuthService);
  //inyectamos router
  private router = inject(Router); 

  public myForm: FormGroup = this.fb.group({
    email:['',[ Validators.required,Validators.email]],
    password:['',[ Validators.required,Validators.minLength(6)]],
  });

  login(){
    const {email,password} = this.myForm.value;
    this.authService.login(email,password)
    .subscribe({
      next:()=> {
        Swal.fire('Login Correcto','','success'); 
        this.router.navigateByUrl('/dashboard');
      },
      error:(message) =>{
        Swal.fire('Error',message,'error')
      }
    })
  }
  

}
