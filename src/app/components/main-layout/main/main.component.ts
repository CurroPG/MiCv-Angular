import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  imports: [],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  descripcion = 'Soy un desarrollador de aplicaciones multiplataforma con experiencia en la creación de soluciones innovadoras y eficientes. Me apasiona la tecnología y siempre estoy buscando aprender nuevas habilidades para mejorar mis proyectos.';
  experiencia = ['Desarrollador de la pagina web macatuma.com', ' Certificado del curso de DevOps de LemonCode Academy', ' Prácticas de php y Wordpress en la empresa Sweet Code Chef'];
  formacion = 'Desarrollo de aplicaciones multiplataforma en CPIFP Alan Turing';
  tecnologias = 'JavaScript, TypeScript, Angular, Node.js, Python, Java, SQL, HTML, CSS, Git, Docker';
}
