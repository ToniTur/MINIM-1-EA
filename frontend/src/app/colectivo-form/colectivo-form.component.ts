import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {ColectivoService} from '../colectivo.service';

@Component({
  selector: 'app-colectivo-form',
  templateUrl: './colectivo-form.component.html',
  styleUrls: ['./colectivo-form.component.css']
})
export class ColectivoFormComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private colectivoService: ColectivoService) { }
  name = new FormControl('', Validators.required);
  description = new FormControl('');
  vaccine = new FormControl('');

  ngOnInit(): void {
  }
  submitData(): void {
    if ((this.name.status === 'VALID') && (this.description.status === 'VALID') && (this.vaccine.status === 'VALID')) {
      const case2 = {
        name: this.name.value,
        description: this.description.value,
        vaccine: this.vaccine.value,
      };
      this.colectivoService.postColectivo(case2).subscribe();
    }
    else {
    }

  }
}
