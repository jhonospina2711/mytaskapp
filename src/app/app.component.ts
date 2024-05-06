import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Todo-app'
  welcome = 'Hola!';
  tasks = [
    'Instalar el Angular CLI',
    'Crear Proyecto',
    'Crear componentes'
  ]
list: any;
}
