import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  router = inject(Router);

  loginObj: any = {
    email: '',
    password: '',
  };

  onLogin() {
    if (
      this.loginObj.email === 'laciyil904@craftapk.com' &&
      this.loginObj.password === '123'
    ) {
      this.router.navigateByUrl('/master');
      localStorage.setItem('empErpUser', this.loginObj.email);
    } else {
      alert('Wrong credentials');
    }
  }
}
