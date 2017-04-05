import { Hero } from '../Models/hero';
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { environment } from '../../Environment';

@Component({
    selector: 'hero-app',
    templateUrl: '/Src/App/Views/HeroList.html'
})
export class AppComponent implements OnInit {

    heroes: Array<Hero>;
    testValue: string;

    ngOnInit(): void {

        this.heroes = new Array<Hero>();

        let h = new Hero();
        let h1 = new Hero();
        let h2 = new Hero();

        h.id = 1;
        h.name = "Thor";

        h1.id = 2;
        h1.name = "Magneto";

        h2.id = 3;
        h2.name = "Batman";

        this.heroes.push(h);
        this.heroes.push(h1);
        this.heroes.push(h2);
    }


    onClick()
    {
        environment.utils.writeSuccess(this.testValue);
    }

}