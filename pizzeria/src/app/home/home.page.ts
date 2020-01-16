import { Component } from '@angular/core';

import { LoadingController, NavController } from '@ionic/angular';
import { RestService } from '../rest.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  pizzas : any;
  api : RestService;

  constructor
  (
    public restapi: RestService,
    public loadingController: LoadingController,
    public navController : NavController
  )
  {
    this.api = restapi;
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
