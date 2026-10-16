import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel],
})
export class Tab3Page {
  // ponytail: datos hardcodeados de ejemplo; reemplazar por servicio real si hay backend
  ranking = [
    { rank: 1, nombre: 'Juan Perez', objetos: 5, tiempo: '2 minutos' },
    { rank: 2, nombre: 'Maria Lopez', objetos: 4, tiempo: '3 minutos' },
    { rank: 3, nombre: 'Carlos Ruiz', objetos: 3, tiempo: '5 minutos' },
    { rank: 4, nombre: 'Ana Torres', objetos: 3, tiempo: '7 minutos' },
    { rank: 5, nombre: 'Luis Gomez', objetos: 2, tiempo: '10 minutos' },
  ];
}
