import { Component, OnInit } from '@angular/core';
import { Tecnologia } from '../tecnologia';
import { TECNOLOGIAS } from '../mock-tecnologias';
import { TecnologiaService } from '../tecnologia.service';
 
@Component({
  selector: 'app-tecnologias',
  templateUrl: './tecnologias.component.html',
  styleUrls: ['./tecnologias.component.css']
})
export class TecnologiasComponent implements OnInit {
 
  tecnologias = TECNOLOGIAS;
 
  selectedTecnologia: Tecnologia;
 
  constructor(private tecnologiaService: TecnologiaService) { }
 
  ngOnInit() {
    this.getTecnologias();
  }
 
  onSelect(tecnologia: Tecnologia): void {
    this.selectedTecnologia = tecnologia;
  }
 
  getTecnologias(): void {
    this.tecnologiaService.getTecnologias()
        .subscribe(tecnologias => this.tecnologias = tecnologias);
  }
}