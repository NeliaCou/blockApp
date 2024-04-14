import { Component } from '@angular/core';
import { Developer } from '../models/developer.model';
// import { JavaImg } from '../../assets/developer.skills/Java.Logo.png';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrl: './developer.component.css'
})
export class DeveloperComponent {

  newDev: Developer = {
    firstName: "John",
    lastName: "Do",
    age: 30,
    gender: "F",
    bio: "Dev",
    skills: {
      name: "Java",
      logo: "JavaImg",
      site: "awesome.site.fr",
    }
  };

  constructor() {}

  ngOnInit() {}

  startDev() {
    console.log(this.newDev);
     
  }
}
