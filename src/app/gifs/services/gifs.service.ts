import { query } from '@angular/animations';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchGifsResponse, Gif } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apikey = 'hcSk7c998rfj9vHzxxtRwsqlM0VNsINc';
  private servicioUrl: string = 'https://api.giphy.com/v1/gifs';
  private _historial: string[] = [];
  public resultados: Gif[] = [];

  

  

  get historial() {
    return this._historial;
  }

  constructor(private http: HttpClient) { 

    // 1º forma
    /* if(localStorage.getItem("Historial")){
      this._historial = JSON.parse(localStorage.getItem("Historial")!);
    } */

    // 2º forma
    this._historial = JSON.parse(localStorage.getItem("Historial")!) || [];


    this.resultados = JSON.parse(localStorage.getItem("Resultados")!) || [];

  }

  buscargifs(query: string = '') {

    query = query.trim().toLocaleLowerCase();

    if (!this._historial.includes(query) && query != '') {
      this._historial.unshift(query);
      this._historial = this._historial.splice(0, 10);

      localStorage.setItem("Historial",JSON.stringify(this._historial));
    }

    const params = new HttpParams()
      .set('api_key', this.apikey)
      .set('limit', '10')
      .set('q', query);

    this.http.get<SearchGifsResponse>(`${this.servicioUrl}/search`,{params: params} )
      .subscribe( (resp) => {
        this.resultados = resp.data;
        localStorage.setItem("Resultados",JSON.stringify(this.resultados));

      });

  }


}