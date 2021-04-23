import {Component, Input, OnInit} from '@angular/core';
import {Colectivo} from '../models/colectivo';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {ColectivoService} from '../colectivo.service';

@Component({
  selector: 'app-colectivo-detail',
  templateUrl: './colectivo-detail.component.html',
  styleUrls: ['./colectivo-detail.component.css']
})
export class ColectivoDetailComponent implements OnInit {
  name = new FormControl('', Validators.required);
  description = new FormControl('');
  vaccine = new FormControl('');

  @Input() colectivo: Colectivo;

  constructor(private formBuilder: FormBuilder, private colectivoService: ColectivoService) { }

  ngOnInit(): void {
  }

  deleteData(name:string): void {
      this.colectivoService.deleteColectivo(name).subscribe();
  }
}
