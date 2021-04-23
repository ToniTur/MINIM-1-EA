import { Component, OnInit } from '@angular/core';
import {ColectivoService} from '../colectivo.service';
import {Colectivo} from '../models/colectivo';

@Component({
  selector: 'app-colectivo-list',
  templateUrl: './colectivo-list.component.html',
  styleUrls: ['./colectivo-list.component.css']
})
export class ColectivoListComponent implements OnInit {

  colectivos: Colectivo[];
  selectedColectivo: Colectivo;
  addColectivoClicked = false;

  constructor(private colectivoService: ColectivoService) { }

  getColectivos(): void {
    this.colectivoService.getColectivos().subscribe(colectivos => this.colectivos = colectivos);
  }
  onSelect(colectivoClicked: Colectivo): void {
    this.selectedColectivo = colectivoClicked;
  }
  ngOnInit(): void {
    this.getColectivos();
  }
  clickedAddColectivo(): void {
    if (this.addColectivoClicked === true){
      this.addColectivoClicked = false;
    }
    else {
      this.addColectivoClicked = true;
    }
  }

}