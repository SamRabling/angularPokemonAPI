import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface PokemonData {
  name:  string;
  stats:  {stat: {name: string, base_stat: number}}[];
}

interface PokeStatData {
  stat: { name: string, base_stat: number };
  pokemon: {pokemon: {name: string}};
}

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {
    this.catchEmAll();
  }
  catchEmAll()  {
    const blastoiseObservable = this._http.get('https://pokeapi.co/api/v2/pokemon/9/');
    blastoiseObservable.subscribe(this.blastoiseStatsData);
  }

  blastoiseStatsData = (data: PokemonData) => {
    let stats = `${data.name} has the following stats:`;
    for (let i = 0; i < data.stats.length; i++) {
      stats += `${data.stats[i].stat.name} : ${data.stats[i].stat.base_stat}`;
    }
  }

  statData = (data: PokeStatData) => {

  }
}
