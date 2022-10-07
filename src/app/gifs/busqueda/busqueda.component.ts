import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  constructor(private gifsService:GifsService) { }

  ngOnInit(): void {
  }

  //el signo !  es para decirle a typescript que confie en nosotros y ignore los nulos
  @ViewChild ( 'txtBuscar' ) txtBuscar !: ElementRef<HTMLInputElement>;
  
  buscar () {
    const valor = this.txtBuscar.nativeElement.value;

    this.gifsService.buscargifs(valor);
    
    this.txtBuscar.nativeElement.value = '';
  }
}
