import { Component, OnInit } from '@angular/core';

import { LoadingController, NavController } from '@ionic/angular';
import { RestService } from '../rest.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {

  pizzas : any;
  api : RestService;
  date: Date = new Date();
  public dailyPizza: Array<{ name: string; price: string; ingredients: Array<string>; icon: string }> = [];

  constructor(
    public restapi: RestService,
    public loadingController: LoadingController,
    public navController : NavController
  ) {
    this.api = restapi;
  }

  /*Array.prototype.sample = function(){
    return this[Math.floor(Math.random()*this.length)];
  }*/

  async getOnePizza(name:any) {
    const loading = await this.loadingController.create({
      message: 'Loading'
    });

    await loading.present();
    await this.api.getOnePizza(name)
      .subscribe(res => {
        this.pizzas = res;

        this.dailyPizza.push({
          name: this.pizzas[0]["name"],
          price: this.pizzas[0]["price"],
          ingredients: this.pizzas[0]["ingredients"],
          icon: this.pizzas[0]["icon"]
        });

        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });
  }

  async pizzaPerDays() {
    const loading = await this.loadingController.create({
      message: 'Loading'
    });

    await loading.present();
    await this.api.getAllPizzas()
      .subscribe(res => {
        this.pizzas = res;

        // Value used to get the daily menu (one pizza depending on the date)
        let value = this.date.getDate() % this.pizzas.length;

        this.dailyPizza.push({
          name: this.pizzas[value]["name"],
          price: this.pizzas[value]["price"],
          ingredients: this.pizzas[value]["ingredients"],
          icon: this.pizzas[value]["icon"]
        });

        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });
  }

  ngOnInit() {
    //this.getOnePizza("ROME"); // Make our choice of daily pizza here
    this.pizzaPerDays();
  }

}
