import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {
    this.catchEmAll();
  }
  catchEmAll(){
    const blastoise = this._http.get('https://pokeapi.co/api/v2/pokemon/9/');
    tempObservable.subscribe(data => console.log('Got our tasks!', data));
  }
}
