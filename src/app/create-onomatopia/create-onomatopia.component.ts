import { Component, EventEmitter, Output } from '@angular/core';
import { newOnomatopia } from '../models/onomatopia.model';

@Component({
  selector: 'app-create-onomatopia',
  templateUrl: './create-onomatopia.component.html',
  styleUrl: './create-onomatopia.component.css'
})
export class CreateOnomatopiaComponent {

  newWord: string = "";

  @Output()
  sendOnomatopiaToParent: EventEmitter<string> = new EventEmitter(); 

  createOnomatopia(): void {
    this.sendOnomatopiaToParent.emit(this.newWord);
    this.newWord = "";
  }

}
