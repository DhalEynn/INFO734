import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-static-menu',
  templateUrl: './static-menu.page.html',
  styleUrls: ['./static-menu.page.scss'],
})
export class StaticMenuPage implements OnInit {
  private selectedItem: any;
  private pizzaTomate: any;
  private pizzaCreme: any;
  private ingred: any;
  public baseTomate: Array<{ name: string; price: string; ingredients: Array<string>; icon: string }> = [];
  public baseCreme: Array<{ name: string; price: string; ingredients: Array<string>; icon: string }> = [];

  constructor() {
    this.pizzaTomate = [
      ['PINOZETANT', '9.00€'],
      ['MERQUET', '9.40€'],
      ['ROME', '9.40€'],
      ['PATELLIÈRE', '9.60€'],
      ['CHANTABEAU', '9.60€']
    ];
    this.pizzaCreme = [
      ['CACTUS', '10.90€'],
      ['NÈVE', '10.60€'],
      ['VERCHÈRE', '10.60€']
    ];
    this.ingred = ["Fromage", "Tomate", "Creme", "Oeuf", "Patate", "Cactus"];
    for (let i = 0; i < this.pizzaTomate.length; i++) {
      /*var ing = "<ul>";
      for (var x in this.ingred) {
        ing = ing + "<li>" + this.ingred[x] + "</li>"
      }
      ing = ing + "</ul>"*/
      this.baseTomate.push({
        name: this.pizzaTomate[i][0],
        price: this.pizzaTomate[i][1],
        ingredients: this.ingred, //ing
        icon: 'pizza'
      });
    }
    for (let i = 0; i < this.pizzaCreme.length; i++) {
      this.baseCreme.push({
        name: this.pizzaCreme[i][0],
        price: this.pizzaCreme[i][1],
        ingredients: this.ingred,
        icon: 'pizza'
      });
    }
  }

  ngOnInit() {
  }

}
