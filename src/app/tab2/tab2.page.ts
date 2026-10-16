import {ChangeDetectorRef, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonLabel,
  IonButton
} from '@ionic/angular';
import {ExploreContainerComponent} from '../explore-container/explore-container.component';
import {Router} from "@angular/router";
import {Subscription} from 'rxjs';
import {DesafioService} from '../services/desafio.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonLabel, IonButton]
})
export class Tab2Page implements OnInit, OnDestroy {

  desafio: any = null;
  private sub?: Subscription;

  @ViewChild('video') videoRef?: ElementRef<HTMLVideoElement>;
  foto: string | null = null;
  camaraActiva = false;
  errorCamara = '';

  constructor(private router: Router, private desafioService: DesafioService, private cdr: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.sub = this.desafioService.desafio$.subscribe((d) => {
      if (d) {
        this.desafio = d;
        this.cdr.markForCheck();
      }
    });
  }

  async abrirCamara() {
    this.errorCamara = '';
    try {
      const stream = await navigator.mediaDevices.getUserMedia({video: {facingMode: 'environment'}}); // cámara trasera
      const video = this.videoRef?.nativeElement;
      if (video) {
        video.srcObject = stream;
        this.camaraActiva = true;
      }
    } catch {
      this.errorCamara = 'No se pudo abrir la cámara. Dale permiso en el navegador.';
    }
    this.cdr.markForCheck(); // zoneless: tras el await hay que avisar para redibujar
  }

  tomarFoto() {
    const video = this.videoRef?.nativeElement;
    if (!video || !this.camaraActiva) return;
    const canvas = document.createElement('canvas');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas.getContext('2d')?.drawImage(video, 0, 0);
    this.foto = canvas.toDataURL('image/jpeg', 0.8);
    this.cerrarCamara();
  }

  cerrarCamara() {
    const video = this.videoRef?.nativeElement;
    const stream = video?.srcObject as MediaStream | null;
    stream?.getTracks().forEach((t) => t.stop());
    if (video) video.srcObject = null;
    this.camaraActiva = false;
  }

  ionViewWillLeave() {
    this.cerrarCamara();
  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
    this.cerrarCamara();
  }

}
