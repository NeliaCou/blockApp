import { Component } from '@angular/core';
import { UserProfile } from '../userProfile';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {
  user : UserProfile = {
    name : 'Doe',
    firstName : 'John',
    age : 25,
    quote : '',
    photo : 'https://randomuser.me/api/portraits/lego/2.jpg'
  };

  isHidden: boolean = false;
  hideAge(): void {
    this.isHidden = !this.isHidden;
  }

  // toogleAgeVisibility(): void {
  //   this.isHidden = !this.isHidden;
  // }
}


