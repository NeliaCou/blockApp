import { Component } from '@angular/core';
import { UserModel } from '../models/userProfil.models';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  newUser: UserModel = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };
  
firstNameOrderInputPlaceholder = 'firstName';
lastNameOrderInputPlaceholder = 'lastName';
emailOrderPlaceholder = 'email';
passwordOrderPlaceholder = 'password';

  onSubmit(){
    console.log(this.newUser);
    
  }
}
