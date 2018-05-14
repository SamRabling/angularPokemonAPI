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
    return this._http.get('https://pokeapi.co/api/v2/pokemon/9/');
    // const blastoiseObservable = this._http.get('https://pokeapi.co/api/v2/pokemon/9/');
    // blastoiseObservable.subscribe(this.blastoiseStatsData);
  }

  blastoiseStatsData = (data: PokemonData) => {
    let stats = `${data.name} has the following stats:`;
    for (let i = 0; i < data.stats.length; i++) {
      stats += `${data.stats[i].stat.name} : ${data.stats[i].stat.base_stat}`;
      console.log(stats);
    }
    console.log(stats);
    for (let i = 0; i < data.stats.length; i++) {
      return this._http.get(`https://pokeapi.co/api/v2/stat/${data.stats[i].stat.name}`);
      // const statObservable = this._http.get(`https://pokeapi.co/api/v2/stat/${data.stats[i].stat.name}`);
      // statObservable.subscribe(this.statData);
    }
  }

  statData = (data: PokeStatData) => {
  let others = `Here are some pokemon with ${data.stat.name} ${data.stat.base_stat}:`;
  for (let i = 0; i < data.stat.length; i++) {
    others += `${data.pokemon[i].pokemon.name}`;
    console.log(others);
    }
    console.log(others);
  }
}
