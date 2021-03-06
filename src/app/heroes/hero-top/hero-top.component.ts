import {Component, OnInit} from '@angular/core';

import {Hero} from '../shared/hero.model';

import {HeroService} from '../shared/hero.service';

@Component({
  selector: 'toh-hero-top',
  templateUrl: './hero-top.component.html',
  styleUrls: ['./hero-top.component.scss']
})
export class HeroTopComponent implements OnInit {

  heroes: Hero[] = [];

  constructor(private heroService: HeroService) {
  }

  ngOnInit(): void {
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes.slice(1, 5));
  }
}
