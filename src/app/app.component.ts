import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';


@Component({
  selector: 'app-root',
  imports: [HeaderComponent, FooterComponent, MainLayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cv';

  seccionActivada = 'resumen';

  cambiarSeccion(seccion: string){
    this.seccionActivada = seccion;
    console.log(this.seccionActivada)
  }
}
