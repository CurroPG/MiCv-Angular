import { Component, input } from '@angular/core';

@Component({
  selector: 'app-main',
  imports: [],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  descripcion = 'Soy un desarrollador de aplicaciones multiplataforma con experiencia en la creación de soluciones innovadoras y eficientes. Me apasiona la tecnología y siempre estoy buscando aprender nuevas habilidades para mejorar mis proyectos.';
  experiencias = [
    {
      id: 1,
      empresa: 'equipo MACAT UMA',
      puesto: 'Desarrollador web',
      periodo: '10 Agosoto 2026 - Actualidad',
      descripcion: 'Desarrollador de la página web del equipo de audiovisuales MACAT',
    },
    {
      id: 2,
      empresa: 'Sweet Code Chef',
      puesto: 'Alumno en Prácticas',
      periodo: '20 Abril 2026 - 29 Mayo 2026',
      descripcion: 'Prácticas de php en automatizaciones de Wordpress ',
    },];
  formacion = 'Desarrollo de aplicaciones multiplataforma en CPIFP Alan Turing y Certificado del curso de DevOps de LemonCode Academy';
  tecnologias = ['JavaScript', 'TypeScript', 'Angular', 'Node.js', 'Python', 'Java', 'SQL', 'HTML', 'CSS', 'Git', 'Docker'];

  tecnologiaSeleccionada: string | undefined;

  seccion = input<string>();

  seleccionarTecnologia(tec: string){
    this.tecnologiaSeleccionada = tec;
  }
}
