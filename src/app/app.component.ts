import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DatePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cv';
  nombre = 'Curro Portillo Guerrero';
  profesion = 'Desarrollo de aplicaciones multiplataforma';
  email = '211curroportillo@gmail.com';
  numTelefono = '722 30 91 12';
  ciudadNacimiento = 'Antequera';
  descripcion = 'Soy un desarrollador de aplicaciones multiplataforma con experiencia en la creación de soluciones innovadoras y eficientes. Me apasiona la tecnología y siempre estoy buscando aprender nuevas habilidades para mejorar mis proyectos.';
  experiencia = 'Desarrollador de la pagina web macatuma.com';
  experiencia2 = ' Certificado del curso de DevOps de LemonCode Academy';
  experiencia3 = ' Prácticas de php y Wordpress en la empresa Sweet Code Chef';
  formacion = 'Grado en Ingeniería Informática';
  tecnologias = 'JavaScript, TypeScript, Angular, Node.js, Python, Java, SQL, HTML, CSS, Git, Docker';

  fecha = new Date();
}
