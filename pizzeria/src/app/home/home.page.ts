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

  ngOnInit() {
  }

}
