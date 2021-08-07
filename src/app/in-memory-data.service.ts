import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      {id: 11, name: 'Pecorine'},
      {id: 12, name: 'Kyaru'},
      {id: 13, name: 'Nozomi'},
      {id: 14, name: 'Kokkoro'},
      {id: 15, name: 'Kyouka'},
      {id: 16, name: 'Mimi'},
      {id: 17, name: 'Tamaki'},
      {id: 18, name: 'Yukari'},
      {id: 19, name: 'Hatsune'},
      {id: 20, name: 'Shiori'}
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}