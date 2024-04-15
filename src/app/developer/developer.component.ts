import { Component } from '@angular/core';
import { Developer } from '../models/developer.model';

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
    skill: {
      name: ["Java"],
      logo: ["/assets/developer/java.png"],
      site:["awesome.site.fr"],
  } 
  };

  constructor() {}

  ngOnInit() {}

  startDev() {
    console.log(this.newDev);
     
  }
}
