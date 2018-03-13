import { Component, OnInit } from '@angular/core';
import { Tecnologia } from '../tecnologia';
import { TecnologiaService } from '../tecnologia.service';
 
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  tecnologias: Tecnologia[] = [];
 
  constructor(private tecnologiaService: TecnologiaService) { }
 
  ngOnInit() {
    this.getTecnologiaes();
  }
 
  getTecnologiaes(): void {
    this.tecnologiaService.getTecnologias()
      .subscribe(tecnologias => this.tecnologias = tecnologias.slice(1, 5));
  }
}