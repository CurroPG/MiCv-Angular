import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common'; 

@Component({
  selector: 'app-header',
  imports: [NgOptimizedImage],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  foto = 'curro_portillo-removebg-preview.png';
  nombre = 'Curro Portillo Guerrero';
  profesion = 'Desarrollo de aplicaciones multiplataforma';
}
