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
  public baseTomate: Array<{ title: string; note: string; icon: string }> = [];
  public baseCreme: Array<{ title: string; note: string; icon: string }> = [];

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
    for (let i = 0; i < this.pizzaTomate.length; i++) {
      this.baseTomate.push({
        title: this.pizzaTomate[i][0],
        note: 'Price : ' + this.pizzaTomate[i][1],
        icon: 'pizza'
      });
    }
    for (let i = 0; i < this.pizzaCreme.length; i++) {
      this.baseCreme.push({
        title: this.pizzaCreme[i][0],
        note: 'Price : ' + this.pizzaCreme[i][1],
        icon: 'pizza'
      });
    }
  }

  ngOnInit() {
  }

}
