import { Component, OnInit } from '@angular/core';

import { LoadingController, NavController } from '@ionic/angular';
import { RestService } from '../rest.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

@Component({
  selector: 'app-static-menu',
  templateUrl: './static-menu.page.html',
  styleUrls: ['./static-menu.page.scss'],
})
export class StaticMenuPage implements OnInit {

  pizzas : any;
  api : RestService;
  private selectedItem: any;
  private pizzaTomate: any;
  private pizzaCreme: any;
  private ingred: any;
  public baseTomate: Array<{ name: string; price: string; ingredients: Array<string>; icon: string }> = [];
  public baseCreme: Array<{ name: string; price: string; ingredients: Array<string>; icon: string }> = [];
  public baseAutre: Array<{ name: string; price: string; ingredients: Array<string>; icon: string }> = [];

  constructor(
    public restapi: RestService,
    public loadingController: LoadingController,
    public navController : NavController
  ) {
    this.api = restapi;
    /*this.pizzaTomate = [
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
    this.ingred = ["Tomate", "Fromage", "Creme", "Oeuf", "Patate", "Cactus"];
    for (let i = 0; i < this.pizzaTomate.length; i++) {
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
    }*/
  }

  async getAllPizzas() {
    const loading = await this.loadingController.create({
      message: 'Loading'
    });

    await loading.present();
    await this.api.getAllPizzas()
      .subscribe(res => {
        console.log(res);
        this.pizzas = res;

        for (var key in this.pizzas) {
          var onePizza = this.pizzas[key];
          console.log(onePizza);
          if (onePizza["ingredients"][0].toLowerCase() == "tomate" || onePizza["ingredients"][0].toLowerCase() == "tomates") {
            this.baseTomate.push({
              name: onePizza["name"],
              price: onePizza["price"],
              ingredients: onePizza["ingredients"],
              icon: onePizza["icon"]
            });
          }
          else if (onePizza["ingredients"][0].toLowerCase() == "creme") {
            this.baseCreme.push({
              name: onePizza["name"],
              price: onePizza["price"],
              ingredients: onePizza["ingredients"],
              icon: onePizza["icon"]
            });
          }
          else {
            this.baseAutre.push({
              name: onePizza["name"],
              price: onePizza["price"],
              ingredients: onePizza["ingredients"],
              icon: onePizza["icon"]
            });
          }
        }

        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });

  }

  ngOnInit() {
    this.getAllPizzas();
  }

}
