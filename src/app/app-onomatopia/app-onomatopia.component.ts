import { Component } from '@angular/core';

@Component({
  selector: 'app-app-onomatopia',
  templateUrl: './app-onomatopia.component.html',
  styleUrl: './app-onomatopia.component.css'
})
export class AppOnomatopiaComponent {
  onomatopoeiaList: string[] = [];

  onReceiveNewOnomatopia(event: string): void {
    this.onomatopoeiaList.push(event);
  }

}
