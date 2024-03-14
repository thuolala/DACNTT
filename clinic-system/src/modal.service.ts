import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  private showModalSubject = new Subject<boolean>(); // Subject to emit modal visibility

  openModal() {
    this.showModalSubject.next(true);
  }

  closeModal() {
    this.showModalSubject.next(false);
  }

  onShowModal(): Observable<boolean> {
    return this.showModalSubject.asObservable();
  }
}
