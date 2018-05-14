import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';
  pokemon = [];
  constructor(private _httpService: HttpService) { }
  ngOnInit() {
    this.getPokemonData();
  }
    getPokemonData() {
      const observable = this._httpService.catchEmAll();
      observable.subscribe(data => {
        console.log('pokemon data is here', data);
        this.pokemon = data ['pokemon'];
      });
    }
  }

