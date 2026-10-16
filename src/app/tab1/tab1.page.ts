import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonAvatar, IonLabel, IonText, IonImg, IonList, IonButton, IonGrid, IonCol, IonRow } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent,
    IonItem, IonAvatar, IonLabel, IonText, IonList, IonButton,
    ExploreContainerComponent, IonGrid, IonCol, IonRow, IonImg,],
})
export class Tab1Page {
  constructor() { }


  // AQUI VA A IR TODO NUESTRO CODIGO

  jugador = {
    nombre: 'Juanita Perez',
    edad: 13,
    sexo: 'F',
    avatar: 'assets/avatares/mujer.jfif'
  }
  desafios = [
    {desafio: 'Busca una silla', icono: 'assets/objetos/silla.jfif'},
    {desafio: 'Busca un borrador de pizarra', icono: 'assets/objetos/borrador_pizarra.jfif'},
    {desafio: 'Busca una computadora', icono: 'assets/objetos/computadora.png'},
  ];

}
