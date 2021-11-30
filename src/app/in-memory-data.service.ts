import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';


@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
        { id: 11, name: 'Clément' },
        { id: 12, name: 'Amandine' },
        { id: 13, name: 'Beata' },
        { id: 14, name: 'Manon' },
        { id: 15, name: 'Marcelin' },
        { id: 16, name: 'François' },
        { id: 17, name: 'Louis' },
        { id: 18, name: 'Aurélie' },
        { id: 19, name: 'Paul' },
        { id: 20, name: 'Cédric' },
        { id: 21, name: 'Alexandre' }
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