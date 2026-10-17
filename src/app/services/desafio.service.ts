import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Desafio {
  desafio: string;
  icono: string;
}

@Injectable({
  providedIn: 'root',
})
export class DesafioService {
  private readonly desafioSubject = new BehaviorSubject<Desafio | null>(null);

  readonly desafio$: Observable<Desafio | null> =
    this.desafioSubject.asObservable();

  setDesafio(desafio: Desafio): void {
    this.desafioSubject.next(desafio);
  }

  getDesafio(): Desafio | null {
    return this.desafioSubject.value;
  }
}
