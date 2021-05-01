import { Component, OnInit } from '@angular/core';
import { RegisterUser } from 'src/app/CommonModel/register/register-user';
import { AuthService } from 'src/app/CommonService/auth.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css'],
})
export class RegisterFormComponent implements OnInit {
  registerUser: RegisterUser = new RegisterUser();
  constructor(private auth: AuthService) {}

  ngOnInit(): void {}
  register() {
    console.log(this.registerUser)
  }
}
