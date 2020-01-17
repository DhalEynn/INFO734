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
  public baseTomate: Array<{ name: string; price: string; ingredients: Array<string>; icon: string }> = [];
  public baseCreme: Array<{ name: string; price: string; ingredients: Array<string>; icon: string }> = [];
  public baseAutre: Array<{ name: string; price: string; ingredients: Array<string>; icon: string }> = [];

  constructor(
    public restapi: RestService,
    public loadingController: LoadingController,
    public navController : NavController
  ) {
    this.api = restapi;
  }

  async getAllPizzas() {
    const loading = await this.loadingController.create({
      message: 'Loading'
    });

    await loading.present();
    await this.api.getAllPizzas()
      .subscribe(res => {
        this.pizzas = res;

        for (var key in this.pizzas) {
          var onePizza = this.pizzas[key];
          if (onePizza["ingredients"][0].toLowerCase() == "tomate" || onePizza["ingredients"][0].toLowerCase() == "tomates") {
            this.baseTomate.push({
              name: onePizza["name"],
              price: onePizza["price"],
              ingredients: onePizza["ingredients"],
              icon: onePizza["icon"]
            });
          }
          else if (onePizza["ingredients"][0].toLowerCase() == "creme" || onePizza["ingredients"][0].toLowerCase() == "crème") {
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
