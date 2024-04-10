import { Component } from '@angular/core';
import {Block} from "../block"
@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrl: './block.component.css'
})
export class BlockComponent {
block : Block= {alphabet : "A B C"};
}
