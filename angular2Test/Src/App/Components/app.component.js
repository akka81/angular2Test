"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var hero_1 = require("../Models/hero");
var core_1 = require("@angular/core");
var Environment_1 = require("../../Environment");
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
        this.heroes = new Array();
        var h = new hero_1.Hero();
        var h1 = new hero_1.Hero();
        var h2 = new hero_1.Hero();
        h.id = 1;
        h.name = "Thor";
        h1.id = 2;
        h1.name = "Magneto";
        h2.id = 3;
        h2.name = "Batman";
        this.heroes.push(h);
        this.heroes.push(h1);
        this.heroes.push(h2);
    };
    AppComponent.prototype.onClick = function () {
        Environment_1.environment.utils.writeSuccess(this.testValue);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'hero-app',
        templateUrl: '/Src/App/Views/HeroList.html'
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map