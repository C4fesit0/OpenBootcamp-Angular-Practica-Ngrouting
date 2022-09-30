import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-kaban-tasks',
  templateUrl: './kaban-tasks.component.html',
  styleUrls: ['./kaban-tasks.component.scss'],
})
export class KabanTasksComponent {
  todo = [
    'Aprender animaciones en Angular',
    'Aprender a gestionar Angular CLI',
    'Aprender a hacer una build en Angular',
    'Aprender a desplegar bundle de Angular'
  ];

  done = [
    'Aprender JS y ES',
    'Aprender Typescript',
    'Instalar Angular',
    'Configurar Id',
    'Crear Hola Mundo en Angular',
    'Aprender a gestionar componentes en Angular',
    'Aprender a gestionar servicios en Angular',
    'Aprender a gestionar directivas en Angular',
    'Aprender a gestionar pipes en Angular',
    'Aprender a gestionar peticiones HTTP en Angular',
    'Aprender a gestionar Angular Material y sus Schematics en Angular'
  ];

  drop(event: CdkDragDrop<string[]>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex);
    }
  }
}
