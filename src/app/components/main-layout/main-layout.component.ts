import { Component } from '@angular/core';
import { MainComponent } from './main/main.component';
import { AsaidComponent } from './asaid/asaid.component';


@Component({
  selector: 'app-main-layout',
  imports: [MainComponent, AsaidComponent],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css'
})
export class MainLayoutComponent {

}
