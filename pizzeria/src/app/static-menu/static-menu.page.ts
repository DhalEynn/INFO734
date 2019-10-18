import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-static-menu',
  templateUrl: './static-menu.page.html',
  styleUrls: ['./static-menu.page.scss'],
})
export class StaticMenuPage implements OnInit {
  private selectedItem: any;
  private pizza: [string, string] = [
    ['PINOZETANT', '9.00€'],
    ['MERQUET', '9.40€'],
    ['ROME', '9.40€'],
    ['PATELLIÈRE', '9.60€'],
    ['CHANTABEAU', '9.60€'],
    ['CACTUS', '10.90€'],
    ['NÈVE', '10.60€'],
    ['VERCHÈRE', '10.60€']
  ];
  private icons = [
    'flask',
    'wifi',
    'beer',
    'football',
    'basketball',
    'paper-plane',
    'american-football',
    'boat',
    'bluetooth',
    'build'
  ];
  public items: Array<{ title: string; note: string; icon: string }> = [];
  constructor() {
    for (let i = 0; i < this.pizza.length; i++) {
      this.items.push({
        title: this.pizza[i][0],
        note: 'Price : ' + this.pizza[i][1],
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
  }

  ngOnInit() {
  }

}
