import { Component, OnInit } from '@angular/core';
import { Hero } from '../shared/interfaces/hero';
import { ApiService } from '../shared/services/api.service';

@Component({
  selector: 'hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.scss']
})
export class HeroCardComponent implements OnInit {

  name: string = '';
  hero: Hero;

  loading = true;

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.name = 'Wolverine';
    this.apiRequest(this.name);

  }
  searchHeroByName(name: string) {
    this.apiRequest(name);
  }

  apiRequest(name: string) {
    this.apiService.getHero(name).subscribe( body => {
      this.hero = body;
      console.log('HERO: ', this.hero);
      this.loading = false;
    });
  }

}
