import { Injectable } from '@angular/core';
 
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
 
import { Tecnologia } from './tecnologia';
import { TECNOLOGIAS } from './mock-tecnologias';
import { MessageService } from './message.service';
 
@Injectable()
export class TecnologiaService {
 
  constructor(private messageService: MessageService) { }
 
  getTecnologias(): Observable<Tecnologia[]> {
    // Todo: send the message _after_ fetching the tecnologias
    this.messageService.add('TecnologiaService: fetched tecnologias');
    return of(TECNOLOGIAS);
  }
  getTecnologia(id: number): Observable<Tecnologia> {
    // Todo: send the message _after_ fetching the tecnologia
    this.messageService.add(`TecnologiaService: fetched tecnologia id=${id}`);
    return of(TECNOLOGIAS.find(tecnologia => tecnologia.id === id));
  }
}
