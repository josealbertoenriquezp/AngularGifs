import { Component, OnInit } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  get historial (){
    return this.gifService.historial;
  }

  constructor(private gifService:GifsService) { }

  ngOnInit(): void {
  }

  buscar(title:string): void {
    this.gifService.buscargifs(title);
  }

}
