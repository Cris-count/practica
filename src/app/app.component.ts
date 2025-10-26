import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Practica cristian';
  subtitulo = 'Mi primer proyecto con Angular';
  parrafo = 'Este es un proyecto de prueba para aprender Angular.';
}
