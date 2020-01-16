import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController } from '@ionic/angular';
import { Validators, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-pizza',
  templateUrl: './add-pizza.page.html',
  styleUrls: ['./add-pizza.page.scss'],
})
export class AddPizzaPage implements OnInit {

  private pizza : FormGroup;
  public api : RestService;

  constructor(
    public restapi: RestService,
    public loadingController: LoadingController,
    private route: ActivatedRoute,
    public router: Router,
    private formBuilder: FormBuilder
  ) {
    console.log("test 1");
    this.pizza = this.formBuilder.group({
          name: [''],
          price: [''],
          ingredients: [''],
        });
    console.log("test 2");
    this.api = restapi;
  }

  async saveTodo(){
    await this.api.createTodo(this.pizza.value)
    .subscribe(res => {
        this.router.navigate(['/']);
      }, (err) => {
        console.log(err);
      });
  }

  save() {
    console.log(this.pizza.value);
    this.saveTodo();

  }

  ngOnInit() {
  }

}
